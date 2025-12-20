// adblock-detector.js
(function() {
    'use strict';

    // Function to check if AdBlock is enabled
    function detectAdBlock() {
        // Create a bait element that ad blockers typically block
        const bait = document.createElement('div');
        bait.className = 'adsbox ad ads banner-ad';
        bait.style.cssText = 'position: absolute; top: -1px; left: -1px; width: 1px; height: 1px;';
        document.body.appendChild(bait);

        // Check if the element was blocked
        setTimeout(() => {
            const isBlocked = bait.offsetHeight === 0 || 
                            bait.offsetWidth === 0 || 
                            window.getComputedStyle(bait).display === 'none' ||
                            window.getComputedStyle(bait).visibility === 'hidden';
            
            document.body.removeChild(bait);

            if (isBlocked) {
                showAdBlockWarning();
            }
        }, 100);
    }

    // Function to show the blocking overlay
    function showAdBlockWarning() {
        // Check if user has already dismissed (optional - remove if you want to always show)
        const dismissedTime = localStorage.getItem('adblock-warning-dismissed');
        if (dismissedTime) {
            const hoursSinceDismiss = (Date.now() - parseInt(dismissedTime)) / (1000 * 60 * 60);
            if (hoursSinceDismiss < 24) {
                return; // Don't show again for 24 hours
            }
        }

        // Create overlay
        const overlay = document.createElement('div');
        overlay.id = 'adblock-overlay';
        overlay.innerHTML = `
            <div class="adblock-modal">
                <div class="adblock-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                </div>
                <h2>AdBlock Detected</h2>
                <p>We noticed you're using an ad blocker. We rely on ads to keep Skill Maps free for everyone.</p>
                <p><strong>Please disable your ad blocker and refresh the page to continue.</strong></p>
                <div class="adblock-instructions">
                    <h3>How to disable AdBlock:</h3>
                    <ol>
                        <li>Click on your ad blocker extension icon in your browser</li>
                        <li>Select "Pause on this site" or "Disable on this site"</li>
                        <li>Refresh the page</li>
                    </ol>
                </div>
                <button id="adblock-refresh-btn" class="refresh-btn">I've Disabled AdBlock - Refresh</button>
                <button id="adblock-dismiss-btn" class="dismiss-btn">Dismiss for 24 hours</button>
            </div>
        `;

        document.body.appendChild(overlay);

        // Add event listeners
        document.getElementById('adblock-refresh-btn').addEventListener('click', () => {
            window.location.reload();
        });

        document.getElementById('adblock-dismiss-btn').addEventListener('click', () => {
            localStorage.setItem('adblock-warning-dismissed', Date.now().toString());
            overlay.remove();
        });

        // Prevent scrolling when overlay is shown
        document.body.style.overflow = 'hidden';
    }

    // Run detection when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', detectAdBlock);
    } else {
        detectAdBlock();
    }
})();
