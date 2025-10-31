// routes/progress.js
const express = require('express');
const { pool } = require('../config/database');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

// All routes are protected
router.use(authenticateToken);

// Get all user progress
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT roadmap_id, progress_percentage, completed_sections, 
              notes, started_at, completed_at, last_updated
       FROM user_progress 
       WHERE user_id = $1 
       ORDER BY last_updated DESC`,
      [req.userId]
    );

    res.json(result.rows);
  } catch (error) {
    console.error('Get progress error:', error);
    res.status(500).json({ error: 'Failed to fetch progress' });
  }
});

// Get progress for specific roadmap
router.get('/:roadmapId', async (req, res) => {
  try {
    const { roadmapId } = req.params;

    const result = await pool.query(
      `SELECT roadmap_id, progress_percentage, completed_sections, 
              notes, started_at, completed_at, last_updated
       FROM user_progress 
       WHERE user_id = $1 AND roadmap_id = $2`,
      [req.userId, roadmapId]
    );

    if (result.rows.length === 0) {
      return res.json({ 
        roadmap_id: roadmapId,
        progress_percentage: 0,
        completed_sections: [],
        notes: null
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get roadmap progress error:', error);
    res.status(500).json({ error: 'Failed to fetch roadmap progress' });
  }
});

// Save or update progress
router.post('/', async (req, res) => {
  try {
    const { roadmap_id, progress_percentage, completed_sections, notes } = req.body;

    // Validation
    if (!roadmap_id) {
      return res.status(400).json({ error: 'Roadmap ID is required' });
    }

    if (progress_percentage !== undefined && 
        (progress_percentage < 0 || progress_percentage > 100)) {
      return res.status(400).json({ 
        error: 'Progress percentage must be between 0 and 100' 
      });
    }

    // Check if progress exists
    const existing = await pool.query(
      'SELECT id FROM user_progress WHERE user_id = $1 AND roadmap_id = $2',
      [req.userId, roadmap_id]
    );

    let result;

    if (existing.rows.length > 0) {
      // Update existing progress
      const updates = [];
      const values = [req.userId, roadmap_id];
      let paramCount = 3;

      if (progress_percentage !== undefined) {
        updates.push(`progress_percentage = $${paramCount++}`);
        values.push(progress_percentage);
        
        // Mark as completed if 100%
        if (progress_percentage === 100) {
          updates.push(`completed_at = CURRENT_TIMESTAMP`);
        }
      }

      if (completed_sections !== undefined) {
        updates.push(`completed_sections = $${paramCount++}`);
        values.push(completed_sections);
      }

      if (notes !== undefined) {
        updates.push(`notes = $${paramCount++}`);
        values.push(notes);
      }

      if (updates.length === 0) {
        return res.status(400).json({ error: 'No fields to update' });
      }

      result = await pool.query(
        `UPDATE user_progress 
         SET ${updates.join(', ')}, last_updated = CURRENT_TIMESTAMP 
         WHERE user_id = $1 AND roadmap_id = $2
         RETURNING *`,
        values
      );
    } else {
      // Insert new progress
      result = await pool.query(
        `INSERT INTO user_progress 
         (user_id, roadmap_id, progress_percentage, completed_sections, notes, completed_at)
         VALUES ($1, $2, $3, $4, $5, 
                 CASE WHEN $3 = 100 THEN CURRENT_TIMESTAMP ELSE NULL END)
         RETURNING *`,
        [
          req.userId, 
          roadmap_id, 
          progress_percentage || 0, 
          completed_sections || [], 
          notes || null
        ]
      );
    }

    res.json({
      success: true,
      message: 'Progress saved successfully',
      progress: result.rows[0]
    });

  } catch (error) {
    console.error('Save progress error:', error);
    res.status(500).json({ error: 'Failed to save progress' });
  }
});

// Delete progress for a roadmap
router.delete('/:roadmapId', async (req, res) => {
  try {
    const { roadmapId } = req.params;

    const result = await pool.query(
      'DELETE FROM user_progress WHERE user_id = $1 AND roadmap_id = $2 RETURNING *',
      [req.userId, roadmapId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Progress not found' });
    }

    res.json({
      success: true,
      message: 'Progress deleted successfully'
    });

  } catch (error) {
    console.error('Delete progress error:', error);
    res.status(500).json({ error: 'Failed to delete progress' });
  }
});

// Get progress summary/statistics
router.get('/stats/summary', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT 
         COUNT(*) as total_roadmaps,
         COUNT(CASE WHEN progress_percentage = 100 THEN 1 END) as completed_roadmaps,
         COUNT(CASE WHEN progress_percentage > 0 AND progress_percentage < 100 THEN 1 END) as in_progress,
         ROUND(AVG(progress_percentage), 2) as avg_progress
       FROM user_progress 
       WHERE user_id = $1`,
      [req.userId]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get progress stats error:', error);
    res.status(500).json({ error: 'Failed to fetch progress statistics' });
  }
});

module.exports = router;