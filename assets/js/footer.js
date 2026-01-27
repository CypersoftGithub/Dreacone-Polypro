// Injects the main site footer into pages.
// Usage: make sure the HTML page has: <div id="site-footer"></div>

document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('site-footer');
  if (!container) return;

  container.innerHTML = `
    <!-- start: Footer Section -->
    <footer class="tj-footer-section footer-4">
        <div class="footer-main-area">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="footer_widget_wrapper">
                            <div class="footer-widget footer-col-1">
                                <div class="footer-logo">
                                    <a href="index">
                                        <img src="assets/images/logos/main-logo-2.png" alt="Dreacone – Polypro Industries Logo">
                                    </a>
                                </div>
                                <div class="footer-text">
                                    <p>Dreacone – Polypro Industries manufactures durable, lightweight, and waterproof PP corrugated sheets and boxes for packaging, construction, and industrial applications.</p>
                                </div>
                                <ul class="footer_socials">
                                    <li><a aria-label="Facebook" href="https://www.facebook.com/share/1Ai5wsxcLK/?mibextid=wwXIfr" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a aria-label="Instagram" href="https://www.instagram.com/dreacone_polypro_industries?igsh=a3BncWt5dDFoeTMy&utm_source=qr" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a aria-label="LinkedIn" href="https://www.linkedin.com/in/dreacone-polypro-industries-72a1503a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a aria-label="X" href="https://x.com/dreaconepolypro?s=21" target="_blank" rel="noopener"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a aria-label="Pinterest" href="https://pin.it/7L1NVj5Lp" target="_blank" rel="noopener"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                            <div class="footer-widget widget-nav-menu">
                                <h5 class="title">Quick Links</h5>
                                <ul>
                                    <li><a href="index"><span>Home</span></a></li>
                                    <li><a href="about"><span>About Us</span></a></li>
                                    <li><a href="export"><span>Export</span></a></li>
                                    <li><a href="contact"><span>Contact</span></a></li>
                                </ul>
                            </div>
                            <div class="footer-widget widget-nav-menu">
                                <h5 class="title">Products</h5>
                                <ul>
                                    <li><a href="pp-corrugated-sheet"><span>PP Corrugated Sheet</span></a></li>
                                    <li><a href="pp-corrugated-box"><span>PP Corrugated Box</span></a></li>
                                </ul>
                            </div>

                            <div class="footer-widget widget-contact">
                                <h5 class="title">Contact Info</h5>
                                <div class="footer-contact-info">
                                    <div class="contact-item">
                                        <span>Ground Survey No.32 Paiki 1, Paiki 2,
Dreacone Polypro Industries, Pipaliya
Road, Lutavadar, Morbi, Gujarat-363660,india.</span>
                                    </div>
                                    <div class="contact-item">
                                        <a href="tel:7041099052">Phone: <br>Tejash Patel +91 70410 99052</a>
                                        <a href="mailto:Dreaconepolypro@gmail.com">Email: <br> Dreaconepolypro@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tj-copyright-area">
            <div class="copyright-wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="copyright-content-area">
                                <div class="copyright-text">
                                    <p>Dreacone – Polypro Industries &copy; 2026. All rights reserved by <a href="https://www.cypersoft.com/" target="_blank" rel="noopener">Cypersoft</a>.</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-space-0"></div>
    </footer>
    <!-- end: Footer Section -->
  `;
});


