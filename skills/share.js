
// Reusable Share Button Component
// Add this script to any article page to enable social sharing

(function() {
  'use strict';

  // Create the share button HTML
  const shareButtonHTML = `
    <div id="shareButton" class="fixed top-24 right-6 z-50 transition-all duration-300">
      <!-- Share Icon Button -->
      <button id="shareToggle" class="bg-green-600 hover:bg-green-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110">
        <i class="fas fa-share-alt text-xl"></i>
      </button>
      
      <!-- Share Options Menu (hidden by default) -->
      <div id="shareMenu" class="absolute right-16 top-0 bg-white rounded-lg shadow-xl p-4 hidden">
        <div class="flex flex-col gap-3 w-48">
          <p class="text-sm font-semibold text-gray-700 mb-2">Share this article</p>
          
          <!-- Facebook -->
          <a id="shareFacebook" href="#" target="_blank" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors group">
            <i class="fab fa-facebook text-2xl text-blue-600 group-hover:scale-110 transition-transform"></i>
            <span class="text-gray-700 font-medium">Facebook</span>
          </a>
          
          <!-- Twitter -->
          <a id="shareTwitter" href="#" target="_blank" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors group">
            <i class="fab fa-twitter text-2xl text-blue-400 group-hover:scale-110 transition-transform"></i>
            <span class="text-gray-700 font-medium">Twitter</span>
          </a>
          
          <!-- LinkedIn -->
          <a id="shareLinkedIn" href="#" target="_blank" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors group">
            <i class="fab fa-linkedin text-2xl text-blue-700 group-hover:scale-110 transition-transform"></i>
            <span class="text-gray-700 font-medium">LinkedIn</span>
          </a>
          
          <!-- WhatsApp -->
          <a id="shareWhatsApp" href="#" target="_blank" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors group">
            <i class="fab fa-whatsapp text-2xl text-green-600 group-hover:scale-110 transition-transform"></i>
            <span class="text-gray-700 font-medium">WhatsApp</span>
          </a>
          
          <!-- Copy Link -->
          <button id="copyLink" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors group text-left">
            <i class="fas fa-link text-2xl text-gray-600 group-hover:scale-110 transition-transform"></i>
            <span class="text-gray-700 font-medium">Copy Link</span>
          </button>
        </div>
      </div>
    </div>
  `;

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShareButton);
  } else {
    initShareButton();
  }

  function initShareButton() {
    // Insert the share button HTML into the body
    document.body.insertAdjacentHTML('beforeend', shareButtonHTML);

    // Get current page info
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    const pageDescription = encodeURIComponent(
      document.querySelector('meta[name="description"]')?.content || document.title
    );

    // Set up share URLs
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
      whatsapp: `https://wa.me/?text=${pageTitle}%20${pageUrl}`
    };

    // Get elements
    const shareToggle = document.getElementById('shareToggle');
    const shareMenu = document.getElementById('shareMenu');
    const shareFacebook = document.getElementById('shareFacebook');
    const shareTwitter = document.getElementById('shareTwitter');
    const shareLinkedIn = document.getElementById('shareLinkedIn');
    const shareWhatsApp = document.getElementById('shareWhatsApp');
    const copyLink = document.getElementById('copyLink');
    const shareButton = document.getElementById('shareButton');

    // Set share URLs
    shareFacebook.href = shareUrls.facebook;
    shareTwitter.href = shareUrls.twitter;
    shareLinkedIn.href = shareUrls.linkedin;
    shareWhatsApp.href = shareUrls.whatsapp;

    // Toggle share menu
    shareToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      shareMenu.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!shareButton.contains(e.target)) {
        shareMenu.classList.add('hidden');
      }
    });

    // Copy link functionality
    copyLink.addEventListener('click', function() {
      const url = window.location.href;
      
      // Try to use the modern clipboard API
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function() {
          showCopyFeedback();
        }).catch(function() {
          // Fallback to older method
          fallbackCopyToClipboard(url);
        });
      } else {
        // Fallback for older browsers
        fallbackCopyToClipboard(url);
      }
    });

    // Fallback copy method for older browsers
    function fallbackCopyToClipboard(text) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      
      try {
        document.execCommand('copy');
        showCopyFeedback();
      } catch (err) {
        alert('Failed to copy link');
      }
      
      document.body.removeChild(textArea);
    }

    // Show copy feedback
    function showCopyFeedback() {
      const originalText = copyLink.querySelector('span').textContent;
      const originalIcon = copyLink.querySelector('i').className;
      
      copyLink.querySelector('span').textContent = 'Link Copied!';
      copyLink.querySelector('i').className = 'fas fa-check text-2xl text-green-600 group-hover:scale-110 transition-transform';
      
      setTimeout(function() {
        copyLink.querySelector('span').textContent = originalText;
        copyLink.querySelector('i').className = originalIcon;
      }, 2000);
    }

    // Scroll behavior - keep button visible
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // You can add additional scroll behaviors here if needed
      // For example, hiding the button on scroll down:
      // if (scrollTop > lastScrollTop && scrollTop > 100) {
      //   shareButton.style.opacity = '0.5';
      // } else {
      //   shareButton.style.opacity = '1';
      // }
      
      lastScrollTop = scrollTop;
    });
  }
})();