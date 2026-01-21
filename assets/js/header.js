// Injects the main site header, offcanvas menu, and hamburger menu into pages.
// Usage: make sure the HTML page has: <div id="site-header"></div>

document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('site-header');
    if (!container) return;

    // Only inject the main site headers (no offcanvas / hamburger extras)
    container.innerHTML = `
    <!-- start: Header Area -->
    <header class="header-area header-3 header-absolute">
        <div class="header-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="header-wrapper">
                            <!-- site logo -->
                            <div class="site_logo">
                                <a class="logo" href="index.html"><img src="assets/images/logos/main-logo-2.png" alt="Logo"></a>
                            </div>

                            <!-- navigation -->
                            <div class="menu-area d-none d-lg-inline-flex align-items-center">
                                <nav id="mobile-menu" class="mainmenu">
                                    <ul>
    <li><a href="index.html">Home</a></li>

    <li><a href="about.html">About Us</a></li>

    <li class="has-dropdown">
        <a href="products.html">Products</a>
        <ul class="sub-menu">
            <li>
                <a href="pp-corrugated-sheet.html">
                    PP Corrugated Sheet
                </a>
            </li>
            <li>
                <a href="pp-corrugated-box.html">
                    PP Corrugated Box
                </a>
            </li>
        </ul>
    </li>

    <li><a href="export.html">Export</a></li>

    <li><a href="contact.html">Contact</a></li>
</ul>
                                </nav>
                            </div>

                            <!-- header right info -->
                            <div class="header-right-item d-flex align-items-center justify-content-end">
                                <div class="header-button d-none d-lg-block">
                                    <a class="tj-primary-btn" href="https://drive.google.com/file/d/1wyqgv_Ymn7QLmqMN8PVORkxkQfEPvwnh/view?usp=drive_link">
                                        <span class="btn-text"><span> Catalogue</span></span>
                                        <span class="btn-icon"><i class="tji-arrow-right-2"></i></span>
                                    </a>
                                </div>
                                <!-- Mobile Menu Toggle Button -->
                                <button class="mobile-menu-toggle d-lg-none" aria-label="Toggle mobile menu">
                                    <span class="toggle-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- end: Header Area -->

    <!-- Custom Mobile Menu Overlay -->
    <div class="custom-mobile-menu-overlay" id="mobileMenuOverlay">
        <div class="custom-mobile-menu">
            <div class="mobile-menu-header">
                <a href="index.html" class="mobile-menu-logo">
                    <img src="assets/images/logos/main-logo-2.png" alt="Logo">
                </a>
                <button class="mobile-menu-close" aria-label="Close mobile menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
           
            <nav class="mobile-menu-nav">
                <ul class="mobile-menu-list"></ul>
                
            </nav>
            <div class="header-button " style="text-align: center;">
                                    <a class="tj-primary-btn" href="https://drive.google.com/file/d/1wyqgv_Ymn7QLmqMN8PVORkxkQfEPvwnh/view?usp=drive_link">
                                        <span class="btn-text"><span>Download Catalogue</span></span>
                                        <span class="btn-icon"><i class="tji-arrow-right-2"></i></span>
                                    </a>
                                </div>
           
        </div>
    </div>

    <!-- start: Header Area -->
    <header class="header-area header-3 header-duplicate header-sticky">
        <div class="header-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="header-wrapper">
                            <!-- site logo -->
                            <div class="site_logo">
                                <a class="logo" href="index.html"><img src="assets/images/logos/main-logo-2.png" alt="Logo"></a>
                            </div>

                            <!-- navigation -->
                            <div class="menu-area d-none d-lg-inline-flex align-items-center">
                                <nav class="mainmenu">
                                   <ul>
    <li><a href="index.html">Home</a></li>

    <li><a href="about.html">About Us</a></li>

    <li class="has-dropdown">
        <a href="products.html">Products</a>
        <ul class="sub-menu">
            <li>
                <a href="pp-corrugated-sheet.html">
                    PP Corrugated Sheet
                </a>
            </li>
            <li>
                <a href="pp-corrugated-box.html">
                    PP Corrugated Box
                </a>
            </li>
        </ul>
    </li>

    <li><a href="export.html">Export</a></li>

    <li><a href="contact.html">Contact</a></li>
</ul>
                                </nav>
                            </div>

                            <!-- header right info -->
                            <div class="header-right-item d-flex align-items-center justify-content-end">
                                <div class="header-button d-none d-lg-block">
                                    <a class="tj-primary-btn" href="https://drive.google.com/file/d/1wyqgv_Ymn7QLmqMN8PVORkxkQfEPvwnh/view?usp=drive_link">
                                        <span class="btn-text"><span> Catalogue</span></span>
                                        <span class="btn-icon"><i class="tji-arrow-right-2"></i></span>
                                    </a>
                                </div>
                                <!-- Mobile Menu Toggle Button -->
                                <button class="mobile-menu-toggle d-lg-none" aria-label="Toggle mobile menu">
                                    <span class="toggle-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- end: Header Area -->
  `;

  // Notify other scripts (like main.js) that the header has been injected
  var headerEvent = new Event('headerLoaded');
  document.dispatchEvent(headerEvent);

  // Load + init Google Translate (only once per page)
  if (!window.__dreaconeTranslateLoaded) {
    window.__dreaconeTranslateLoaded = true;

    // This callback is called by Google's script
    window.googleTranslateElementInit = function () {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        try {
          new window.google.translate.TranslateElement(
            { pageLanguage: 'en', autoDisplay: false },
            'google_translate_element'
          );
        } catch (e) {}
        try {
          new window.google.translate.TranslateElement(
            { pageLanguage: 'en', autoDisplay: false },
            'google_translate_element_sticky'
          );
        } catch (e) {}
        try {
          new window.google.translate.TranslateElement(
            { pageLanguage: 'en', autoDisplay: false },
            'google_translate_element_mobile'
          );
        } catch (e) {}
      }

      // If Google rendered only the first widget before sticky shows,
      // clone its markup into the sticky + mobile targets once available.
      var syncTranslate = function () {
        var src = document.querySelector('#google_translate_element .goog-te-gadget');
        var stickyTarget = document.getElementById('google_translate_element_sticky');
        var mobileTarget = document.getElementById('google_translate_element_mobile');

        if (!src || !(stickyTarget || mobileTarget)) return false;

        var html = src.innerHTML;
        if (stickyTarget && !stickyTarget.innerHTML.trim()) {
          stickyTarget.innerHTML = html;
        }
        if (mobileTarget && !mobileTarget.innerHTML.trim()) {
          mobileTarget.innerHTML = html;
        }
        return true;
      };

      // Poll briefly until the first widget is ready, then copy once.
      var attempts = 0;
      var maxAttempts = 10;
      var poll = setInterval(function () {
        attempts++;
        if (syncTranslate() || attempts >= maxAttempts) {
          clearInterval(poll);
        }
      }, 300);
    };

    // Inject Google's translate script
    var s = document.createElement('script');
    s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.async = true;
    document.body.appendChild(s);
  }
});


