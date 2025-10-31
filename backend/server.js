// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { pool, testConnection } = require('./config/database');

// Validate required environment variables
const requiredEnvVars = ['DB_PASSWORD', 'JWT_SECRET', 'DB_NAME'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ ERROR: Missing required environment variables:');
  missingVars.forEach(varName => console.error(`   - ${varName}`));
  console.error('\nPlease create a .env file based on .env.example');
  process.exit(1);
}

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:8080',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Health check endpoint
app.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ 
      status: 'healthy', 
      database: 'connected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(503).json({ 
      status: 'unhealthy', 
      database: 'disconnected',
      error: error.message 
    });
  }
});

// Import routes
const authRoutes = require('./routes/auth');
const progressRoutes = require('./routes/progress');
const quizRoutes = require('./routes/quiz');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/quiz', quizRoutes);

// Dashboard endpoint
app.get('/api/dashboard', require('./middleware/auth'), async (req, res) => {
  try {
    const userId = req.userId;

    // Get user info
    const userResult = await pool.query(
      'SELECT id, username, email, created_at, avatar_url FROM users WHERE id = $1',
      [userId]
    );

    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Get statistics
    const statsResult = await pool.query(
      'SELECT * FROM user_stats WHERE user_id = $1',
      [userId]
    );

    // Get recent progress
    const progressResult = await pool.query(
      `SELECT roadmap_id, progress_percentage, last_updated, started_at
       FROM user_progress 
       WHERE user_id = $1 
       ORDER BY last_updated DESC 
       LIMIT 5`,
      [userId]
    );

    // Get recent quiz results
    const quizResult = await pool.query(
      `SELECT quiz_id, score, total_questions, percentage, completed_at
       FROM quiz_results 
       WHERE user_id = $1 
       ORDER BY completed_at DESC 
       LIMIT 10`,
      [userId]
    );

    // Get bookmarks
    const bookmarksResult = await pool.query(
      `SELECT content_type, content_id, content_title, content_url, created_at
       FROM bookmarks 
       WHERE user_id = $1 
       ORDER BY created_at DESC 
       LIMIT 10`,
      [userId]
    );

    res.json({
      user: userResult.rows[0],
      stats: statsResult.rows[0] || {
        roadmaps_in_progress: 0,
        roadmaps_completed: 0,
        quizzes_taken: 0,
        avg_quiz_score: 0,
        bookmarks_count: 0,
        certificates_earned: 0
      },
      recentProgress: progressResult.rows,
      recentQuizzes: quizResult.rows,
      bookmarks: bookmarksResult.rows
    });

  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
});

// Bookmarks endpoints
app.post('/api/bookmarks', require('./middleware/auth'), async (req, res) => {
  try {
    const { content_type, content_id, content_title, content_url } = req.body;
    
    if (!content_type || !content_id) {
      return res.status(400).json({ error: 'Content type and ID are required' });
    }

    const result = await pool.query(
      `INSERT INTO bookmarks (user_id, content_type, content_id, content_title, content_url)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (user_id, content_type, content_id) DO NOTHING
       RETURNING *`,
      [req.userId, content_type, content_id, content_title, content_url]
    );

    if (result.rows.length === 0) {
      return res.status(409).json({ error: 'Bookmark already exists' });
    }

    res.json({ success: true, bookmark: result.rows[0] });
  } catch (error) {
    console.error('Bookmark error:', error);
    res.status(500).json({ error: 'Failed to add bookmark' });
  }
});

app.get('/api/bookmarks', require('./middleware/auth'), async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM bookmarks WHERE user_id = $1 ORDER BY created_at DESC',
      [req.userId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Bookmarks fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch bookmarks' });
  }
});

app.delete('/api/bookmarks/:id', require('./middleware/auth'), async (req, res) => {
  try {
    const result = await pool.query(
      'DELETE FROM bookmarks WHERE id = $1 AND user_id = $2 RETURNING *',
      [req.params.id, req.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Bookmark not found' });
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Bookmark delete error:', error);
    res.status(500).json({ error: 'Failed to delete bookmark' });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  
  // Don't expose internal errors in production
  const errorMessage = process.env.NODE_ENV === 'production' 
    ? 'Internal server error' 
    : err.message;
  
  res.status(err.status || 500).json({ 
    error: errorMessage,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  });
});

// Start server
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; // ✅ or '127.0.0.1' if you want IPv4 only

testConnection()
  .then(() => {
    app.listen(PORT, HOST, () => {
      console.log(`✅ Server running on http://${HOST}:${PORT}`);
      console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🌐 CORS enabled for: ${process.env.FRONTEND_URL || 'http://localhost:8080'}`);
      console.log(`\n🚀 API endpoints available at http://${HOST}:${PORT}/api`);
    });
  })
  .catch(err => {
    console.error('❌ Failed to connect to database:', err.message);
    process.exit(1);
  });


// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  pool.end();
  process.exit(0);
});