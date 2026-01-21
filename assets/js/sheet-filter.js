// PP Corrugated Sheet page - right sidebar filter (Applications)
document.addEventListener('DOMContentLoaded', function () {
  var filterRoot = document.getElementById('sheet-filter');
  var grid = document.getElementById('sheet-products-grid');
  if (!filterRoot || !grid) return;

  // Items must have tags via: data-apps="construction storage ..."
  // If a tag is missing, we default it to "construction" to avoid empty filters.
  var items = Array.prototype.slice.call(grid.querySelectorAll('.project-item'));
  items.forEach(function (item) {
    if (!item.getAttribute('data-apps')) item.setAttribute('data-apps', 'construction');
  });

  function setActive(link) {
    var links = filterRoot.querySelectorAll('a[data-filter]');
    Array.prototype.forEach.call(links, function (a) {
      a.classList.remove('is-active');
    });
    if (link) link.classList.add('is-active');
  }

  function applyFilter(key) {
    var k = (key || 'all').toLowerCase();
    var cols = Array.prototype.slice.call(grid.querySelectorAll('.col-12'));

    cols.forEach(function (col) {
      var item = col.querySelector('.project-item');
      if (!item) return;
      var apps = (item.getAttribute('data-apps') || '').toLowerCase();
      var show = k === 'all' || apps.split(/\s+/).indexOf(k) !== -1;
      col.style.display = show ? '' : 'none';
    });
  }

  filterRoot.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[data-filter]') : null;
    if (!a) return;
    e.preventDefault();
    var key = a.getAttribute('data-filter') || 'all';
    setActive(a);
    applyFilter(key);
  });
});


