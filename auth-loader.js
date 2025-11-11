// auth-loader.js
// Universal authentication loader for all Skill Maps pages
// Add this script to every page that includes panel-nav.html

(function() {
    // Initialize auth function
    function initializeAuth() {
        const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
        
        const authButtons = document.getElementById('authButtons');
        const userProfile = document.getElementById('userProfile');
        const mobileAuthButtons = document.getElementById('mobileAuthButtons');
        const mobileUserMenu = document.getElementById('mobileUserMenu');
        
        console.log('🔐 Auth Check:', user ? `Logged in as ${user.username}` : 'Not logged in');
        
        if (user) {
            // User is logged in - show profile
            if (authButtons) authButtons.classList.add('hidden');
            if (userProfile) {
                userProfile.classList.remove('hidden');
                const userName = document.getElementById('userName');
                const userInitial = document.getElementById('userInitial');
                if (userName) userName.textContent = user.username || user.email;
                if (userInitial) userInitial.textContent = (user.username || user.email).charAt(0).toUpperCase();
            }
            
            // Mobile
            if (mobileAuthButtons) mobileAuthButtons.classList.add('hidden');
            if (mobileUserMenu) {
                mobileUserMenu.classList.remove('hidden');
                const mobileUserName = document.getElementById('mobileUserName');
                if (mobileUserName) mobileUserName.textContent = user.username || user.email;
            }
        } else {
            // User is logged out - show login/signup
            if (authButtons) authButtons.classList.remove('hidden');
            if (userProfile) userProfile.classList.add('hidden');
            if (mobileAuthButtons) mobileAuthButtons.classList.remove('hidden');
            if (mobileUserMenu) mobileUserMenu.classList.add('hidden');
        }
    }

    // Setup event handlers
    function setupEventHandlers() {
        // Logout handlers
        const logoutBtn = document.getElementById('logoutBtn');
        const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');
        
        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleLogout);
        }
        
        if (mobileLogoutBtn) {
            mobileLogoutBtn.addEventListener('click', handleLogout);
        }

        // Profile dropdown
        const profileToggle = document.getElementById('profileToggle');
        const profileDropdown = document.getElementById('profileDropdown');
        
        if (profileToggle && profileDropdown) {
            profileToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                profileDropdown.classList.toggle('hidden');
            });
            
            document.addEventListener('click', () => {
                profileDropdown.classList.add('hidden');
            });
        }

        // Mobile menu toggle
        const navToggle = document.getElementById('navToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (navToggle && mobileMenu) {
            navToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }

    // Handle logout
    function handleLogout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        alert('You have been logged out successfully!');
        window.location.href = 'index.html';
    }

    // Load navigation and initialize
    function loadNavigation() {
        const navPlaceholder = document.getElementById('navPlaceholder');
        
        if (!navPlaceholder) {
            console.error('❌ No #navPlaceholder found on this page');
            return;
        }

        fetch('panel-nav.html')
            .then(response => {
                if (!response.ok) throw new Error('Failed to load navigation');
                return response.text();
            })
            .then(data => {
                navPlaceholder.innerHTML = data;
                
                // Wait for DOM to update, then initialize
                setTimeout(() => {
                    initializeAuth();
                    setupEventHandlers();
                    console.log('✅ Navigation loaded and auth initialized');
                }, 100);
            })
            .catch(error => {
                console.error('❌ Error loading navigation:', error);
            });
    }

    // Auto-load when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadNavigation);
    } else {
        loadNavigation();
    }
})();