-- database/schema.sql
-- PostgreSQL Database Schema for Skill Maps

-- Drop existing tables (careful in production!)
DROP TABLE IF EXISTS certificates CASCADE;
DROP TABLE IF EXISTS bookmarks CASCADE;
DROP TABLE IF EXISTS quiz_results CASCADE;
DROP TABLE IF EXISTS user_progress CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    avatar_url VARCHAR(500),
    bio TEXT
);

-- User progress table (tracks roadmap progress)
CREATE TABLE user_progress (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    roadmap_id VARCHAR(100) NOT NULL,
    progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
    completed_sections TEXT[], -- Array of completed section IDs
    notes TEXT,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    UNIQUE(user_id, roadmap_id)
);

-- Quiz results table
CREATE TABLE quiz_results (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    quiz_id VARCHAR(100) NOT NULL,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    percentage DECIMAL(5,2) GENERATED ALWAYS AS (
        CASE 
            WHEN total_questions > 0 THEN (score::DECIMAL / total_questions * 100)
            ELSE 0 
        END
    ) STORED,
    time_taken INTEGER, -- in seconds
    answers JSONB, -- Store detailed answers as JSON
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bookmarks table
CREATE TABLE bookmarks (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    content_type VARCHAR(50) NOT NULL, -- 'roadmap', 'blog', 'course', 'quiz'
    content_id VARCHAR(100) NOT NULL,
    content_title VARCHAR(255),
    content_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, content_type, content_id)
);

-- Certificates table (for completed roadmaps)
CREATE TABLE certificates (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    roadmap_id VARCHAR(100) NOT NULL,
    certificate_id VARCHAR(100) UNIQUE NOT NULL,
    issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    certificate_data JSONB -- Store certificate details
);

-- Create indexes for better query performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_user_progress_roadmap_id ON user_progress(roadmap_id);
CREATE INDEX idx_quiz_results_user_id ON quiz_results(user_id);
CREATE INDEX idx_quiz_results_quiz_id ON quiz_results(quiz_id);
CREATE INDEX idx_bookmarks_user_id ON bookmarks(user_id);
CREATE INDEX idx_certificates_user_id ON certificates(user_id);

-- Create view for user statistics
CREATE VIEW user_stats AS
SELECT 
    u.id AS user_id,
    u.username,
    u.email,
    COUNT(DISTINCT up.roadmap_id) AS roadmaps_in_progress,
    COUNT(DISTINCT CASE WHEN up.progress_percentage = 100 THEN up.roadmap_id END) AS roadmaps_completed,
    COUNT(DISTINCT qr.id) AS quizzes_taken,
    ROUND(AVG(qr.percentage), 2) AS avg_quiz_score,
    COUNT(DISTINCT b.id) AS bookmarks_count,
    COUNT(DISTINCT c.id) AS certificates_earned
FROM users u
LEFT JOIN user_progress up ON u.id = up.user_id
LEFT JOIN quiz_results qr ON u.id = qr.user_id
LEFT JOIN bookmarks b ON u.id = b.user_id
LEFT JOIN certificates c ON u.id = c.user_id
GROUP BY u.id, u.username, u.email;

-- Function to update last_updated timestamp
CREATE OR REPLACE FUNCTION update_last_updated()
RETURNS TRIGGER AS $$
BEGIN
    NEW.last_updated = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update last_updated
CREATE TRIGGER update_user_progress_timestamp
    BEFORE UPDATE ON user_progress
    FOR EACH ROW
    EXECUTE FUNCTION update_last_updated();

-- Insert sample data (optional - remove in production)
-- INSERT INTO users (username, email, password) VALUES 
-- ('demo_user', 'demo@skillmaps.com', '$2b$10$dummyhash'); -- Replace with actual hash

-- Verify tables created
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;