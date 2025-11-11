const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================
// MIDDLEWARE
// ============================================

// CORS - Allow all origins temporarily
app.use(cors());

// Body parser
app.use(bodyParser.json());
app.use(express.static(__dirname));

// ============================================
// DATABASE CONNECTION
// ============================================

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false }
});

// Test connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('❌ Database error:', err.message);
  } else {
    console.log('✅ Connected to Neon PostgreSQL!');
    release();
  }
});

// ============================================
// VALIDATION HELPERS
// ============================================

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

function validateUsername(username) {
  return /^[a-zA-Z0-9_]{3,20}$/.test(username);
}

// ============================================
// API ENDPOINTS
// ============================================

// REGISTER
app.post('/api/register', async (req, res) => {
  try {
    const { email, username, password } = req.body;

    console.log('Registration attempt:', { email, username });

    // Validate all fields present
    if (!email || !username || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields required' 
      });
    }

    // Validate email format
    if (!validateEmail(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }

    // Validate username
    if (!validateUsername(username)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Username must be 3-20 characters (letters, numbers, underscore)' 
      });
    }

    // Validate password
    if (!validatePassword(password)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Password must be at least 6 characters' 
      });
    }

    // Check if user exists
    const checkUser = await pool.query(
      'SELECT * FROM users WHERE email = $1 OR username = $2',
      [email.toLowerCase(), username.toLowerCase()]
    );

    if (checkUser.rows.length > 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email or username already exists' 
      });
    }

    // Insert user (plain text password for now - INSECURE but works)
    const result = await pool.query(
      'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING id, email, username, created_at',
      [email.toLowerCase(), username.toLowerCase(), password]
    );

    console.log('User created successfully:', result.rows[0]);

    res.status(201).json({
      success: true,
      message: 'Account created successfully!',
      user: result.rows[0]
    });

  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error: ' + error.message
    });
  }
});

// LOGIN
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('Login attempt:', { email });

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email and password required' 
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }

    // Get user from database
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email.toLowerCase()]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    const user = result.rows[0];

    // Check password (plain text comparison - INSECURE but works)
    if (user.password !== password) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    console.log('Login successful:', user.username);

    res.json({
      success: true,
      message: 'Login successful!',
      user: {
        id: user.id,
        email: user.email,
        username: user.username
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error: ' + error.message
    });
  }
});

// GET ALL USERS
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, email, username, created_at FROM users ORDER BY created_at DESC'
    );
    
    res.json({
      success: true,
      count: result.rows.length,
      users: result.rows
    });
  } catch (error) {
    console.error('Users fetch error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// HEALTH CHECK
app.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ 
      status: 'OK', 
      database: 'Connected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'ERROR', 
      database: 'Disconnected',
      timestamp: new Date().toISOString(),
      error: error.message
    });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Skill Maps API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      register: 'POST /api/register',
      login: 'POST /api/login',
      users: 'GET /api/users'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error: ' + err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 Railway URL: https://skill-mapscom-production.up.railway.app\n`);
});
