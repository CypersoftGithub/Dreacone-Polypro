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
                                    <a class="tj-primary-btn" href="contact.html">
                                        <span class="btn-text"><span>Contact Us</span></span>
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
                                    <a class="tj-primary-btn" href="contact.html">
                                        <span class="btn-text"><span>Contact Us</span></span>
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
});


