// nav-switcher.js
// This script runs AFTER navigation is loaded and switches Login/Signup to Nickname/Logout

(function() {
  'use strict';
  
  console.log('🚀 Nav switcher loaded');
  
  // Wait for navigation to be loaded
  function waitForNav() {
    const authButtons = document.getElementById('authButtons');
    const userButtons = document.getElementById('userButtons');
    
    if (!authButtons || !userButtons) {
      console.log('⏳ Waiting for navigation elements...');
      setTimeout(waitForNav, 100);
      return;
    }
    
    console.log('✅ Navigation elements found!');
    updateNavigation();
    
    // Setup logout handler
    setupLogout();
  }
  
  function updateNavigation() {
    console.log('🔍 Checking login status...');
    
    // Get user from localStorage
    const userStr = localStorage.getItem('currentUser');
    console.log('📦 User data:', userStr);
    
    const isLoggedIn = userStr && userStr !== 'null' && userStr !== 'undefined';
    console.log('🔐 Logged in?', isLoggedIn);
    
    const authButtons = document.getElementById('authButtons');
    const userButtons = document.getElementById('userButtons');
    const nicknameBtn = document.getElementById('nicknameBtn');
    
    if (isLoggedIn) {
      try {
        const user = JSON.parse(userStr);
        const nickname = user.username || user.email || 'User';
        
        console.log('✅ User found:', nickname);
        
        // Hide Login/Signup
        authButtons.style.display = 'none';
        
        // Show Nickname/Logout
        userButtons.style.display = 'flex';
        userButtons.style.gap = '2rem';
        nicknameBtn.textContent = nickname;
        
        console.log('✅ Navigation updated to:', nickname, '| Logout');
        
        // Update mobile too
        const mobileAuthButtons = document.getElementById('mobileAuthButtons');
        const mobileUserButtons = document.getElementById('mobileUserButtons');
        const mobileNicknameBtn = document.getElementById('mobileNicknameBtn');
        
        if (mobileAuthButtons) mobileAuthButtons.style.display = 'none';
        if (mobileUserButtons) mobileUserButtons.style.display = 'block';
        if (mobileNicknameBtn) mobileNicknameBtn.textContent = nickname;
        
      } catch (e) {
        console.error('❌ Error parsing user:', e);
        showLoggedOut();
      }
    } else {
      console.log('🔓 No user found');
      showLoggedOut();
    }
  }
  
  function showLoggedOut() {
    const authButtons = document.getElementById('authButtons');
    const userButtons = document.getElementById('userButtons');
    
    if (authButtons) authButtons.style.display = 'flex';
    if (authButtons) authButtons.style.gap = '2rem';
    if (userButtons) userButtons.style.display = 'none';
    
    const mobileAuthButtons = document.getElementById('mobileAuthButtons');
    const mobileUserButtons = document.getElementById('mobileUserButtons');
    
    if (mobileAuthButtons) mobileAuthButtons.style.display = 'block';
    if (mobileUserButtons) mobileUserButtons.style.display = 'none';
    
    console.log('✅ Showing Login/Signup');
  }
  
  function setupLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');
    
    function handleLogout() {
      console.log('🚪 Logging out...');
      localStorage.removeItem('currentUser');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      alert('You have been logged out!');
      window.location.href = 'index.html';
    }
    
    if (logoutBtn) {
      logoutBtn.addEventListener('click', handleLogout);
      console.log('✅ Logout handler attached');
    }
    
    if (mobileLogoutBtn) {
      mobileLogoutBtn.addEventListener('click', handleLogout);
    }
  }
  
  // Mobile menu toggle
  function setupMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (navToggle && mobileMenu) {
      navToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
      });
      console.log('✅ Mobile menu handler attached');
    }
  }
  
  // Start waiting for navigation
  waitForNav();
  setupMobileMenu();
  
  // Re-check when page becomes visible (in case user switched tabs)
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
      console.log('👀 Page visible, rechecking...');
      updateNavigation();
    }
  });
  
  console.log('✅ Nav switcher initialized');
})();