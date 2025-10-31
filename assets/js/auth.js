// assets/js/auth.js
// Frontend authentication and API handler for Skill Maps

class AuthService {
  constructor() {
    this.apiUrl = 'http://localhost:3000/api'; // Change in production
    this.token = localStorage.getItem('authToken');
    this.user = JSON.parse(localStorage.getItem('user') || 'null');
  }

  // Check if user is logged in
  isLoggedIn() {
    return !!this.token && !!this.user;
  }

  // Get current user
  getUser() {
    return this.user;
  }

  // Register new user
  async register(username, email, password) {
    try {
      const response = await fetch(`${this.apiUrl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      if (data.token) {
        this.token = data.token;
        this.user = data.user;
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        this.updateUI();
      }

      return data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }

  // Login user
  async login(email, password) {
    try {
      const response = await fetch(`${this.apiUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      if (data.token) {
        this.token = data.token;
        this.user = data.user;
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        this.updateUI();
      }

      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  // Logout user
  logout() {
    this.token = null;
    this.user = null;
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    this.updateUI();
    window.location.href = '/';
  }

  // Get current user from API
  async getCurrentUser() {
    try {
      const response = await this.authenticatedRequest('/auth/me');
      return response.user;
    } catch (error) {
      console.error('Get user error:', error);
      if (error.message.includes('token')) {
        this.logout();
      }
      throw error;
    }
  }

  // Save roadmap progress
  async saveProgress(roadmapId, progressPercentage, completedSections = [], notes = '') {
    try {
      const response = await this.authenticatedRequest('/progress', {
        method: 'POST',
        body: JSON.stringify({
          roadmap_id: roadmapId,
          progress_percentage: progressPercentage,
          completed_sections: completedSections,
          notes: notes
        })
      });
      return response;
    } catch (error) {
      console.error('Save progress error:', error);
      throw error;
    }
  }

  // Get progress for specific roadmap
  async getProgress(roadmapId) {
    try {
      const response = await this.authenticatedRequest(`/progress/${roadmapId}`);
      return response;
    } catch (error) {
      console.error('Get progress error:', error);
      throw error;
    }
  }

  // Save quiz result
  async saveQuizResult(quizId, score, totalQuestions, timeTaken = null, answers = null) {
    try {
      const response = await this.authenticatedRequest('/quiz/result', {
        method: 'POST',
        body: JSON.stringify({
          quiz_id: quizId,
          score: score,
          total_questions: totalQuestions,
          time_taken: timeTaken,
          answers: answers
        })
      });
      return response;
    } catch (error) {
      console.error('Save quiz result error:', error);
      throw error;
    }
  }

  // Get quiz results
  async getQuizResults(limit = 20, offset = 0) {
    try {
      const response = await this.authenticatedRequest(
        `/quiz/results?limit=${limit}&offset=${offset}`
      );
      return response;
    } catch (error) {
      console.error('Get quiz results error:', error);
      throw error;
    }
  }

  // Get dashboard data
  async getDashboard() {
    try {
      const response = await this.authenticatedRequest('/dashboard');
      return response;
    } catch (error) {
      console.error('Get dashboard error:', error);
      throw error;
    }
  }

  // Add bookmark
  async addBookmark(contentType, contentId, contentTitle, contentUrl) {
    try {
      const response = await this.authenticatedRequest('/bookmarks', {
        method: 'POST',
        body: JSON.stringify({
          content_type: contentType,
          content_id: contentId,
          content_title: contentTitle,
          content_url: contentUrl
        })
      });
      return response;
    } catch (error) {
      console.error('Add bookmark error:', error);
      throw error;
    }
  }

  // Get bookmarks
  async getBookmarks() {
    try {
      const response = await this.authenticatedRequest('/bookmarks');
      return response;
    } catch (error) {
      console.error('Get bookmarks error:', error);
      throw error;
    }
  }

  // Delete bookmark
  async deleteBookmark(bookmarkId) {
    try {
      const response = await this.authenticatedRequest(`/bookmarks/${bookmarkId}`, {
        method: 'DELETE'
      });
      return response;
    } catch (error) {
      console.error('Delete bookmark error:', error);
      throw error;
    }
  }

  // Generic authenticated request helper
  async authenticatedRequest(endpoint, options = {}) {
    if (!this.token) {
      throw new Error('Not authenticated');
    }

    const response = await fetch(`${this.apiUrl}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
        ...options.headers
      }
    });

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        this.logout();
      }
      throw new Error(data.error || 'Request failed');
    }

    return data;
  }

  // Update UI based on authentication state
  updateUI() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const userMenu = document.getElementById('userMenu');
    const userNameDisplay = document.getElementById('userNameDisplay');

    if (this.isLoggedIn()) {
      // User is logged in
      if (loginBtn) loginBtn.style.display = 'none';
      if (signupBtn) signupBtn.style.display = 'none';
      if (userMenu) userMenu.style.display = 'block';
      if (userNameDisplay) userNameDisplay.textContent = this.user.username;

      // Show protected features
      document.querySelectorAll('.auth-required').forEach(el => {
        el.style.display = 'block';
      });
    } else {
      // User is not logged in
      if (loginBtn) loginBtn.style.display = 'block';
      if (signupBtn) signupBtn.style.display = 'block';
      if (userMenu) userMenu.style.display = 'none';

      // Hide protected features
      document.querySelectorAll('.auth-required').forEach(el => {
        el.style.display = 'none';
      });
    }
  }

  // Show message to user
  showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      background: ${type === 'error' ? '#f44336' : type === 'success' ? '#4CAF50' : '#2196F3'};
      color: white;
      border-radius: 4px;
      z-index: 10000;
      animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(messageDiv);

    setTimeout(() => {
      messageDiv.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
  }
}

// Create global instance
const auth = new AuthService();

// Initialize UI on page load
document.addEventListener('DOMContentLoaded', () => {
  auth.updateUI();

  // Set up logout button if exists
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      auth.logout();
    });
  }
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);