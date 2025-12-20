// adblock-detector.js - Enhanced Multi-Method Detection
(function() {
    'use strict';

    let adBlockDetected = false;

    // Method 1: Bait Element Detection
    function checkBaitElement() {
        return new Promise((resolve) => {
            const bait = document.createElement('div');
            bait.className = 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links advertisement';
            bait.style.cssText = 'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;';
            document.body.appendChild(bait);

            setTimeout(() => {
                const detected = bait.offsetParent === null || 
                                bait.offsetHeight === 0 || 
                                bait.offsetLeft === 0 || 
                                bait.offsetTop === 0 || 
                                bait.offsetWidth === 0 || 
                                bait.clientHeight === 0 || 
                                bait.clientWidth === 0;
                
                try {
                    const computedStyle = window.getComputedStyle(bait);
                    const isHidden = computedStyle.display === 'none' || 
                                   computedStyle.visibility === 'hidden' ||
                                   computedStyle.opacity === '0';
                    
                    document.body.removeChild(bait);
                    resolve(detected || isHidden);
                } catch (e) {
                    document.body.removeChild(bait);
                    resolve(detected);
                }
            }, 100);
        });
    }

    // Method 2: Google Ads Detection
    function checkGoogleAds() {
        return new Promise((resolve) => {
            if (typeof window.google_ad_client === 'undefined' || 
                window.google_ad_client === null) {
                resolve(false);
                return;
            }
            
            const script = document.createElement('script');
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
            script.onerror = () => resolve(true);
            script.onload = () => resolve(false);
            
            setTimeout(() => resolve(false), 1000);
            document.head.appendChild(script);
        });
    }

    // Method 3: AdSense Detection
    function checkAdSense() {
        return new Promise((resolve) => {
            const ads = document.createElement('ins');
            ads.className = 'adsbygoogle';
            ads.style.cssText = 'display:inline-block;width:1px;height:1px;position:absolute;left:-10000px;';
            ads.setAttribute('data-ad-client', 'ca-pub-1234567890123456');
            ads.setAttribute('data-ad-slot', '1234567890');
            document.body.appendChild(ads);

            setTimeout(() => {
                const detected = ads.innerHTML.length === 0 || 
                               ads.clientHeight === 0;
                document.body.removeChild(ads);
                resolve(detected);
            }, 100);
        });
    }

    // Method 4: Fetch-based Detection
    function checkFetchBlock() {
        return new Promise((resolve) => {
            fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
                method: 'HEAD',
                mode: 'no-cors',
                cache: 'no-store'
            })
            .then(() => resolve(false))
            .catch(() => resolve(true));
            
            setTimeout(() => resolve(false), 2000);
        });
    }

    // Function to show the blocking overlay (NO DISMISS OPTION)
    function showAdBlockWarning() {
        if (document.getElementById('adblock-overlay')) {
            return; // Already shown
        }

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
                        <li><strong>Click</strong> on your ad blocker extension icon (usually in the top-right corner of your browser)</li>
                        <li><strong>Select</strong> "Pause on this site" or "Disable on skill-maps.com"</li>
                        <li><strong>Refresh</strong> this page</li>
                    </ol>
                </div>
                <button id="adblock-refresh-btn" class="refresh-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;">
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <polyline points="1 20 1 14 7 14"></polyline>
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                    </svg>
                    I've Disabled AdBlock - Refresh Now
                </button>
                <p class="help-text">Still having trouble? Make sure to completely turn off all ad blocking extensions.</p>
            </div>
        `;

        document.body.appendChild(overlay);

        // Add event listener for refresh button
        document.getElementById('adblock-refresh-btn').addEventListener('click', () => {
            window.location.reload(true); // Hard reload
        });

        // Prevent scrolling
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // Prevent closing with ESC key
        document.addEventListener('keydown', preventEscape);
    }

    function preventEscape(e) {
        if (e.key === 'Escape') {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    // Run all detection methods
    async function detectAdBlock() {
        try {
            const results = await Promise.all([
                checkBaitElement(),
                checkAdSense(),
                checkFetchBlock()
            ]);

            // If any method detects ad blocker
            adBlockDetected = results.some(result => result === true);

            if (adBlockDetected) {
                console.warn('AdBlock detected - showing warning');
                showAdBlockWarning();
            } else {
                console.log('No AdBlock detected');
            }
        } catch (error) {
            console.error('Error during AdBlock detection:', error);
            // Optionally show warning on error
            // showAdBlockWarning();
        }
    }

    // Run detection when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', detectAdBlock);
    } else {
        detectAdBlock();
    }

    // Also check again after page load (some ad blockers load later)
    window.addEventListener('load', () => {
        if (!adBlockDetected) {
            setTimeout(detectAdBlock, 500);
        }
    });
})();
