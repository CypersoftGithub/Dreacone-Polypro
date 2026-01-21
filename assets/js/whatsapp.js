// Floating WhatsApp button (site-wide)
// Injects a fixed WhatsApp icon on the right side that opens a chat on click.
document.addEventListener('DOMContentLoaded', function () {
  // Prevent duplicates if included multiple times
  if (document.getElementById('whatsapp-float')) return;

  // Phone number must be in international format without + or spaces
  var phone = '917041099052'; // +91 70410 99052
  var message = 'Hello Dreacone Polypro Industries';
  var href = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);

  var a = document.createElement('a');
  a.id = 'whatsapp-float';
  a.className = 'whatsapp-float';
  a.href = href;
  a.target = '_blank';
  a.rel = 'noopener';
  a.setAttribute('aria-label', 'Chat on WhatsApp');
  a.title = 'Chat on WhatsApp';

  // Uses Font Awesome (already loaded on your pages)
  a.innerHTML = '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i>';

  document.body.appendChild(a);
});


