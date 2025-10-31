// routes/quiz.js
const express = require('express');
const { pool } = require('../config/database');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

// All routes are protected
router.use(authenticateToken);

// Save quiz result
router.post('/result', async (req, res) => {
  try {
    const { quiz_id, score, total_questions, time_taken, answers } = req.body;

    // Validation
    if (!quiz_id || score === undefined || !total_questions) {
      return res.status(400).json({ 
        error: 'Quiz ID, score, and total questions are required' 
      });
    }

    if (score < 0 || score > total_questions) {
      return res.status(400).json({ 
        error: 'Score must be between 0 and total questions' 
      });
    }

    // Insert quiz result
    const result = await pool.query(
      `INSERT INTO quiz_results 
       (user_id, quiz_id, score, total_questions, time_taken, answers)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, quiz_id, score, total_questions, percentage, time_taken, completed_at`,
      [req.userId, quiz_id, score, total_questions, time_taken || null, answers || null]
    );

    res.status(201).json({
      success: true,
      message: 'Quiz result saved successfully',
      result: result.rows[0]
    });

  } catch (error) {
    console.error('Save quiz result error:', error);
    res.status(500).json({ error: 'Failed to save quiz result' });
  }
});

// Get all quiz results for user
router.get('/results', async (req, res) => {
  try {
    const { limit = 50, offset = 0 } = req.query;

    const result = await pool.query(
      `SELECT id, quiz_id, score, total_questions, percentage, 
              time_taken, completed_at
       FROM quiz_results 
       WHERE user_id = $1 
       ORDER BY completed_at DESC
       LIMIT $2 OFFSET $3`,
      [req.userId, limit, offset]
    );

    // Get total count
    const countResult = await pool.query(
      'SELECT COUNT(*) as total FROM quiz_results WHERE user_id = $1',
      [req.userId]
    );

    res.json({
      results: result.rows,
      total: parseInt(countResult.rows[0].total),
      limit: parseInt(limit),
      offset: parseInt(offset)
    });

  } catch (error) {
    console.error('Get quiz results error:', error);
    res.status(500).json({ error: 'Failed to fetch quiz results' });
  }
});

// Get results for specific quiz
router.get('/results/:quizId', async (req, res) => {
  try {
    const { quizId } = req.params;

    const result = await pool.query(
      `SELECT id, quiz_id, score, total_questions, percentage, 
              time_taken, answers, completed_at
       FROM quiz_results 
       WHERE user_id = $1 AND quiz_id = $2
       ORDER BY completed_at DESC`,
      [req.userId, quizId]
    );

    res.json(result.rows);

  } catch (error) {
    console.error('Get quiz results error:', error);
    res.status(500).json({ error: 'Failed to fetch quiz results' });
  }
});

// Get quiz statistics
router.get('/stats', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT 
         COUNT(*) as total_quizzes_taken,
         COUNT(DISTINCT quiz_id) as unique_quizzes,
         ROUND(AVG(percentage), 2) as avg_score,
         MAX(percentage) as best_score,
         MIN(percentage) as worst_score,
         ROUND(AVG(time_taken), 0) as avg_time_seconds
       FROM quiz_results 
       WHERE user_id = $1`,
      [req.userId]
    );

    // Get best performing quizzes
    const topQuizzes = await pool.query(
      `SELECT quiz_id, 
              COUNT(*) as attempts,
              ROUND(AVG(percentage), 2) as avg_score,
              MAX(percentage) as best_score
       FROM quiz_results 
       WHERE user_id = $1
       GROUP BY quiz_id
       ORDER BY avg_score DESC
       LIMIT 5`,
      [req.userId]
    );

    // Get recent activity
    const recentActivity = await pool.query(
      `SELECT DATE(completed_at) as date, 
              COUNT(*) as quizzes_taken,
              ROUND(AVG(percentage), 2) as avg_score
       FROM quiz_results 
       WHERE user_id = $1 AND completed_at >= CURRENT_DATE - INTERVAL '30 days'
       GROUP BY DATE(completed_at)
       ORDER BY date DESC`,
      [req.userId]
    );

    res.json({
      overall: result.rows[0],
      topQuizzes: topQuizzes.rows,
      recentActivity: recentActivity.rows
    });

  } catch (error) {
    console.error('Get quiz stats error:', error);
    res.status(500).json({ error: 'Failed to fetch quiz statistics' });
  }
});

// Get leaderboard for a specific quiz (top scores)
router.get('/leaderboard/:quizId', async (req, res) => {
  try {
    const { quizId } = req.params;
    const { limit = 10 } = req.query;

    const result = await pool.query(
      `SELECT 
         u.username,
         qr.score,
         qr.total_questions,
         qr.percentage,
         qr.time_taken,
         qr.completed_at,
         RANK() OVER (ORDER BY qr.percentage DESC, qr.time_taken ASC) as rank
       FROM quiz_results qr
       JOIN users u ON qr.user_id = u.id
       WHERE qr.quiz_id = $1 
         AND qr.id IN (
           SELECT MAX(id) 
           FROM quiz_results 
           WHERE quiz_id = $1 
           GROUP BY user_id
         )
       ORDER BY qr.percentage DESC, qr.time_taken ASC
       LIMIT $2`,
      [quizId, limit]
    );

    res.json(result.rows);

  } catch (error) {
    console.error('Get leaderboard error:', error);
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

// Delete quiz result
router.delete('/results/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      'DELETE FROM quiz_results WHERE id = $1 AND user_id = $2 RETURNING *',
      [id, req.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Quiz result not found' });
    }

    res.json({
      success: true,
      message: 'Quiz result deleted successfully'
    });

  } catch (error) {
    console.error('Delete quiz result error:', error);
    res.status(500).json({ error: 'Failed to delete quiz result' });
  }
});

module.exports = router;