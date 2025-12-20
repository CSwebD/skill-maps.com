// adblock-detector.js - Simplified and More Reliable
(function() {
    'use strict';

    // Function to show the blocking overlay
    function showAdBlockWarning() {
        // Prevent duplicate overlays
        if (document.getElementById('adblock-overlay')) {
            return;
        }

        console.log('SHOWING ADBLOCK OVERLAY');

        const overlay = document.createElement('div');
        overlay.id = 'adblock-overlay';
        overlay.innerHTML = `
            <div class="adblock-modal">
                <div class="adblock-icon">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                    </svg>
                </div>
                <h2>🚫 AdBlock Detected</h2>
                <p>We've detected that you're using an ad blocker.</p>
                <p><strong>Please disable your ad blocker to access Skill Maps.</strong></p>
                <p class="support-text">We rely on ads to keep our platform free and accessible to everyone.</p>
                <div class="adblock-instructions">
                    <h3>📋 How to disable your AdBlock:</h3>
                    <ol>
                        <li><strong>Click</strong> on your ad blocker extension icon (usually in the top-right corner)</li>
                        <li><strong>Select</strong> "Pause on this site" or "Disable for this site"</li>
                        <li><strong>Click</strong> the refresh button below</li>
                    </ol>
                    <div class="common-adblockers">
                        <p><strong>Common ad blockers:</strong> uBlock Origin, AdBlock Plus, AdGuard, AdBlock, Ghostery, Privacy Badger</p>
                    </div>
                </div>
                <button id="adblock-refresh-btn" class="refresh-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;">
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <polyline points="1 20 1 14 7 14"></polyline>
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                    </svg>
                    I've Disabled AdBlock - Refresh Now
                </button>
                <p class="help-text">Still seeing this? Make sure ALL ad blocking extensions are disabled.</p>
            </div>
        `;

        document.body.appendChild(overlay);

        // Add refresh button handler
        const refreshBtn = document.getElementById('adblock-refresh-btn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', function() {
                window.location.reload(true);
            });
        }

        // Prevent scrolling
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }

    // Detection Method: Create invisible ad element
    function detectAdBlock() {
        console.log('Starting AdBlock detection...');

        // Create ad bait element
        const adBait = document.createElement('div');
        adBait.className = 'ad ads adsbox ad-placement ad-container advert advertisement banner-ad';
        adBait.style.cssText = 'height: 1px !important; width: 1px !important; position: absolute !important; left: -999px !important; top: -999px !important;';
        adBait.innerHTML = '&nbsp;';
        
        document.body.appendChild(adBait);

        // Check after a brief delay
        setTimeout(function() {
            let isBlocked = false;

            try {
                // Check multiple properties
                if (adBait.offsetHeight === 0 || 
                    adBait.offsetWidth === 0 ||
                    adBait.offsetParent === null ||
                    adBait.clientHeight === 0 ||
                    adBait.clientWidth === 0) {
                    isBlocked = true;
                    console.log('AdBlock detected: Element dimensions are 0 or hidden');
                }

                // Check computed styles
                const styles = window.getComputedStyle(adBait);
                if (styles.display === 'none' || 
                    styles.visibility === 'hidden' ||
                    styles.opacity === '0') {
                    isBlocked = true;
                    console.log('AdBlock detected: Element style is hidden');
                }

                console.log('Detection results:', {
                    offsetHeight: adBait.offsetHeight,
                    offsetWidth: adBait.offsetWidth,
                    offsetParent: adBait.offsetParent,
                    clientHeight: adBait.clientHeight,
                    clientWidth: adBait.clientWidth,
                    display: styles.display,
                    visibility: styles.visibility,
                    opacity: styles.opacity
                });

            } catch (e) {
                isBlocked = true;
                console.error('Error during detection:', e);
            }

            // Clean up
            try {
                document.body.removeChild(adBait);
            } catch (e) {
                console.error('Error removing bait:', e);
            }

            // Show warning if blocked
            if (isBlocked) {
                console.log('✗ AdBlock IS ACTIVE - Showing overlay');
                showAdBlockWarning();
            } else {
                console.log('✓ No AdBlock detected');
            }
        }, 100);
    }

    // Run detection when page is ready
    function init() {
        if (document.body) {
            detectAdBlock();
        } else {
            // Wait for body to be available
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', detectAdBlock);
            } else {
                setTimeout(detectAdBlock, 10);
            }
        }
    }

    // Start immediately
    init();

    // Also check after page fully loads
    window.addEventListener('load', function() {
        if (!document.getElementById('adblock-overlay')) {
            setTimeout(detectAdBlock, 500);
        }
    });

})();
