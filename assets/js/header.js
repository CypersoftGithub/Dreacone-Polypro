// Injects the main site header, offcanvas menu, and hamburger menu into pages.
// Usage: make sure the HTML page has: <div id="site-header"></div>

document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('site-header');
    if (!container) return;

    container.innerHTML = `
    <!-- start: Offcanvas Menu -->
    <div class="tj-offcanvas-area d-none d-lg-block">
        <div class="hamburger_bg"></div>
        <div class="hamburger_wrapper">
            <div class="hamburger_inner">
                <div class="hamburger_top d-flex align-items-center justify-content-between">
                    <div class="hamburger_logo">
                        <a href="index.html" class="mobile_logo">
                            <img src="assets/images/logos/main-logo-2.png" alt="Logo">
                        </a>
                    </div>
                    <div class="hamburger_close">
                        <button class="hamburger_close_btn">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="offcanvas-text">
                    <p>Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion
                        recognized by industry leaders.</p>
                </div>
                <div class="hamburger-search-area">
                    <h5 class="hamburger-title">Search Now!</h5>
                    <div class="hamburger_search">
                        <form method="get" action="index.html">
                            <button type="submit"><i class="tji-search"></i></button>
                            <input type="search" autocomplete="off" name="s" value="" placeholder="Search here...">
                        </form>
                    </div>
                </div>
                <div class="hamburger-infos">
                    <h5 class="hamburger-title">Contact Info</h5>
                    <div class="contact-info">
                        <div class="contact-item">
                            <span class="subtitle">Phone</span>
                            <a class="contact-link" href="tel:10095447818">+1 (009) 544-7818</a>
                        </div>
                        <div class="contact-item">
                            <span class="subtitle">Email</span>
                            <a class="contact-link" href="mailto:info@tekmino.com">info@tekmino.com</a>
                        </div>
                        <div class="contact-item">
                            <span class="subtitle">Location</span>
                            <span class="contact-link">993 Renner Burg, West Rond, MT 94251-030</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hamburger-socials">
                <h5 class="hamburger-title">Follow Us</h5>
                <div class="social-links style-2">
                    <ul>
                        <li><a href="https://www.facebook.com/" target="_blank"><i class="tji-facebook"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><i class="tji-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i class="tji-instagram"></i></a></li>
                        <li><a href="https://x.com/" target="_blank"><i class="tji-x-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- end: Offcanvas Menu -->

    <!-- start: Hamburger Menu -->
    <div class="hamburger-area d-lg-none">
        <div class="hamburger_bg"></div>
        <div class="hamburger_wrapper">
            <div class="hamburger_inner">
                <div class="hamburger_top d-flex align-items-center justify-content-between">
                    <div class="hamburger_logo">
                        <a href="index.html" class="mobile_logo">
                            <img src="assets/images/logos/main-logo-2.png" alt="Logo">
                        </a>
                    </div>
                    <div class="hamburger_close">
                        <button class="hamburger_close_btn">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="hamburger_menu">
                    <div class="mobile_menu"></div>
                </div>
                <div class="hamburger-infos">
                    <h5 class="hamburger-title">Contact Info</h5>
                    <div class="contact-info">
                        <div class="contact-item">
                            <span class="subtitle">Phone</span>
                            <a class="contact-link" href="tel:8089091313">808-909-1313</a>
                        </div>
                        <div class="contact-item">
                            <span class="subtitle">Email</span>
                            <a class="contact-link" href="mailto:info@tekmino.com">info@tekmino.com</a>
                        </div>
                        <div class="contact-item">
                            <span class="subtitle">Location</span>
                            <span class="contact-link">993 Renner Burg, West Rond, MT 94251-030</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hamburger-socials">
                <h5 class="hamburger-title">Follow Us</h5>
                <div class="social-links style-2">
                    <ul>
                        <li><a href="https://www.facebook.com/" target="_blank"><i class="tji-facebook"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><i class="tji-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i class="tji-instagram"></i></a></li>
                        <li><a href="https://x.com/" target="_blank"><i class="tji-x-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- end: Hamburger Menu -->

    <!-- start: Header Area -->
    <header class="header-area header-4 header-absolute">
        <div class="header-bottom">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="header-wrapper">
                            <!-- site logo -->
                            <div class="site_logo">
                                <a class="logo" href="index.html"><img src="assets/images/logos/main-logo-2.png" alt="Logo"></a>
                            </div>

                            <!-- navigation (desktop) -->
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
                            <div class="header-right-item d-none d-lg-inline-flex">
                                <div class="header-button d-lg-block d-none">
                                    <a class="tj-primary-btn" href="contact.html">
                                        <span class="btn-text"><span>Contact Us</span></span>
                                        <span class="btn-icon"><i class="tji-arrow-right-2"></i></span>
                                    </a>
                                </div>
                            </div>

                            <!-- menu bar -->
                            <button class="menu_btn mobile_menu_bar d-lg-none">
                                <span class="cubes">
                                    <span></span>
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
    </header>
    <!-- end: Header Area -->

    <!-- start: Header Area (sticky duplicate) -->
    <header class="header-area header-1 header-duplicate header-sticky">
        <div class="header-bottom">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="header-wrapper">
                            <!-- site logo -->
                            <div class="site_logo">
                                <a class="logo" href="index.html"><img src="assets/images/logos/main-logo-2.png" alt="Logo"></a>
                            </div>

                            <!-- navigation (desktop sticky) -->
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
                            <div class="header-right-item d-none d-lg-inline-flex">
                                <div class="header-button d-lg-block d-none">
                                    <a class="tj-primary-btn" href="contact.html">
                                        <span class="btn-text"><span>Contact Us</span></span>
                                        <span class="btn-icon"><i class="tji-arrow-right-2"></i></span>
                                    </a>
                                </div>
                            </div>

                            <!-- menu bar -->
                            <button class="menu_btn mobile_menu_bar d-lg-none">
                                <span class="cubes">
                                    <span></span>
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
    </header>
    <!-- end: Header Area -->
  `;

  // Notify other scripts (like main.js) that the header has been injected
  var headerEvent = new Event('headerLoaded');
  document.dispatchEvent(headerEvent);
});


