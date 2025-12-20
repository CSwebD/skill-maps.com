// adblock-detector.js - Universal AdBlock Detection
(function() {
    'use strict';

    let detectionAttempts = 0;
    const MAX_ATTEMPTS = 3;

    // Method 1: Multiple Bait Elements with Different Classes
    function createBaitElements() {
        const baitConfigs = [
            'ad ads advertisement advert advertise advertising',
            'pub_300x250 pub_300x250m pub_728x90',
            'ad-placement ad-container banner-ad',
            'google-ad adsense adsbygoogle',
            'sponsored-content promoted-content',
            'text-ad text_ad textAd textads'
        ];

        const baits = [];
        baitConfigs.forEach((classes, index) => {
            const bait = document.createElement('div');
            bait.className = classes;
            bait.id = `ad-bait-${index}`;
            bait.style.cssText = 'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;';
            bait.innerHTML = '&nbsp;';
            document.body.appendChild(bait);
            baits.push(bait);
        });

        return baits;
    }

    // Method 2: Check if bait elements are blocked
    function checkBaitElements(baits) {
        let blocked = false;
        
        baits.forEach(bait => {
            try {
                if (bait.offsetParent === null || 
                    bait.offsetHeight === 0 || 
                    bait.offsetWidth === 0 ||
                    bait.clientHeight === 0 ||
                    bait.clientWidth === 0) {
                    blocked = true;
                }

                const style = window.getComputedStyle(bait);
                if (style.display === 'none' || 
                    style.visibility === 'hidden' ||
                    style.opacity === '0') {
                    blocked = true;
                }
            } catch (e) {
                blocked = true;
            }
        });

        // Clean up
        baits.forEach(bait => {
            try {
                document.body.removeChild(bait);
            } catch (e) {}
        });

        return blocked;
    }

    // Method 3: Try to load actual ad scripts
    function checkAdScripts() {
        return new Promise((resolve) => {
            const testUrls = [
                'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
                'https://www.googletagservices.com/tag/js/gpt.js'
            ];

            let blocked = false;
            let completed = 0;

            testUrls.forEach(url => {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                
                script.onerror = () => {
                    blocked = true;
                    completed++;
                    if (completed === testUrls.length) {
                        resolve(blocked);
                    }
                };

                script.onload = () => {
                    completed++;
                    if (completed === testUrls.length) {
                        resolve(blocked);
                    }
                };

                script.src = url;
                document.head.appendChild(script);
            });

            // Timeout fallback
            setTimeout(() => {
                if (completed < testUrls.length) {
                    resolve(true); // Assume blocked if scripts don't load
                }
            }, 2000);
        });
    }

    // Method 4: Check for AdBlock browser extensions
    function checkExtensions() {
        const blockerIndicators = [
            'blockAdBlock',
            'canRunAds',
            'isAdBlockActive'
        ];

        for (let indicator of blockerIndicators) {
            if (window[indicator] === false) {
                return true;
            }
        }

        return false;
    }

    // Method 5: Fake Ad Element Detection
    function checkFakeAd() {
        return new Promise((resolve) => {
            const fakeAd = document.createElement('div');
            fakeAd.className = 'adsbygoogle';
            fakeAd.style.cssText = 'display:block;width:1px;height:1px;position:absolute;top:-10000px;';
            fakeAd.setAttribute('data-ad-client', 'ca-pub-1234567890123456');
            fakeAd.setAttribute('data-ad-slot', '1234567890');
            fakeAd.setAttribute('data-ad-format', 'auto');
            
            document.body.appendChild(fakeAd);

            setTimeout(() => {
                const blocked = fakeAd.innerHTML === '' || 
                               fakeAd.offsetHeight === 0 ||
                               fakeAd.offsetWidth === 0;
                
                try {
                    document.body.removeChild(fakeAd);
                } catch (e) {}
                
                resolve(blocked);
            }, 200);
        });
    }

    // Method 6: Image-based detection
    function checkAdImage() {
        return new Promise((resolve) => {
            const img = document.createElement('img');
            img.src = 'https://pagead2.googlesyndication.com/pagead/show_ads.js';
            img.style.cssText = 'position:absolute;top:-10000px;left:-10000px;width:1px;height:1px;';
            
            img.onerror = () => {
                try {
                    document.body.removeChild(img);
                } catch (e) {}
                resolve(true);
            };
            
            img.onload = () => {
                try {
                    document.body.removeChild(img);
                } catch (e) {}
                resolve(false);
            };
            
            document.body.appendChild(img);
            
            setTimeout(() => {
                try {
                    document.body.removeChild(img);
                } catch (e) {}
                resolve(true);
            }, 1000);
        });
    }

    // Show the blocking overlay
    function showAdBlockWarning() {
        // Check if already shown
        if (document.getElementById('adblock-overlay')) {
            return;
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
                <p class="help-text">Still seeing this message? Make sure ALL ad blocking extensions are disabled.</p>
            </div>
        `;

        document.body.appendChild(overlay);

        // Refresh button handler
        document.getElementById('adblock-refresh-btn').addEventListener('click', () => {
            window.location.reload(true);
        });

        // Prevent scrolling
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // Prevent ESC key
        document.addEventListener('keydown', preventEscape);

        console.warn('AdBlock detected and overlay shown');
    }

    function preventEscape(e) {
        if (e.key === 'Escape') {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }

    // Main detection function
    async function detectAdBlock() {
        detectionAttempts++;
        console.log(`AdBlock detection attempt ${detectionAttempts}/${MAX_ATTEMPTS}`);

        try {
            // Create and check bait elements
            const baits = createBaitElements();
            
            // Wait a moment for ad blockers to act
            await new Promise(resolve => setTimeout(resolve, 150));
            
            const baitBlocked = checkBaitElements(baits);
            
            // Run other checks in parallel
            const [scriptsBlocked, fakeAdBlocked, imageBlocked] = await Promise.all([
                checkAdScripts(),
                checkFakeAd(),
                checkAdImage()
            ]);

            const extensionsDetected = checkExtensions();

            // Log results for debugging
            console.log('Detection results:', {
                baitBlocked,
                scriptsBlocked,
                fakeAdBlocked,
                imageBlocked,
                extensionsDetected
            });

            // If ANY method detects ad blocker, show warning
            if (baitBlocked || scriptsBlocked || fakeAdBlocked || imageBlocked || extensionsDetected) {
                showAdBlockWarning();
                return true;
            }

            return false;
        } catch (error) {
            console.error('Error during AdBlock detection:', error);
            // On error, try again if we haven't reached max attempts
            if (detectionAttempts < MAX_ATTEMPTS) {
                setTimeout(detectAdBlock, 1000);
            }
            return false;
        }
    }

    // Initial detection
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(detectAdBlock, 100);
            });
        } else {
            setTimeout(detectAdBlock, 100);
        }

        // Additional check after full page load
        window.addEventListener('load', () => {
            if (!document.getElementById('adblock-overlay') && detectionAttempts < MAX_ATTEMPTS) {
                setTimeout(detectAdBlock, 500);
            }
        });

        // Final check after 2 seconds (for lazy-loading ad blockers)
        setTimeout(() => {
            if (!document.getElementById('adblock-overlay') && detectionAttempts < MAX_ATTEMPTS) {
                detectAdBlock();
            }
        }, 2000);
    }

    init();
})();
