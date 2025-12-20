// adblock-detector.js - Script Loading Detection Method
(function() {
    'use strict';

    let adBlockDetected = false;
    let detectionComplete = false;

    // Function to show the blocking overlay
    function showAdBlockWarning() {
        if (document.getElementById('adblock-overlay') || detectionComplete) {
            return;
        }

        detectionComplete = true;
        console.log('AdBlock detected - showing overlay');

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

    // Detection Method: Try to load Google AdSense script
    function detectAdBlock() {
        console.log('Starting AdBlock detection (Script Loading Method)...');

        // Try to load the actual ad script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        
        script.onerror = function() {
            console.log('AdSense script blocked - AdBlock detected');
            adBlockDetected = true;
            showAdBlockWarning();
        };
        
        script.onload = function() {
            console.log('AdSense script loaded successfully');
            // Double check if adsbygoogle exists
            setTimeout(function() {
                if (typeof window.adsbygoogle === 'undefined') {
                    console.log('adsbygoogle undefined despite load - AdBlock detected');
                    adBlockDetected = true;
                    showAdBlockWarning();
                } else {
                    console.log('No AdBlock detected');
                }
            }, 100);
        };

        try {
            document.head.appendChild(script);
        } catch (e) {
            console.error('Error appending script:', e);
            adBlockDetected = true;
            showAdBlockWarning();
        }

        // Timeout fallback - if script doesn't load or error in 3 seconds, assume blocked
        setTimeout(function() {
            if (!adBlockDetected && !detectionComplete && typeof window.adsbygoogle === 'undefined') {
                console.log('Timeout reached - assuming AdBlock is active');
                adBlockDetected = true;
                showAdBlockWarning();
            }
        }, 3000);
    }

    // Initialize detection
    function init() {
        if (document.head) {
            detectAdBlock();
        } else {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', detectAdBlock);
            } else {
                setTimeout(detectAdBlock, 10);
            }
        }
    }

    // Start detection
    init();

})();
