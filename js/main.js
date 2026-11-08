(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // barra de progreso
  var bar = $('.progress');
  function prog() { var h = document.documentElement; var m = h.scrollHeight - h.clientHeight; bar.style.transform = 'scaleX(' + (m > 0 ? h.scrollTop / m : 0) + ')'; }
  addEventListener('scroll', prog, { passive: true }); prog();

  // aparición al hacer scroll
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); } });
  }, { threshold: 0.12 }) : null;
  $$('.reveal, .sec-title').forEach(function (el) { io ? io.observe(el) : el.classList.add('in-view'); });

  // texto que se escribe solo
  var roles = $('#roles');
  if (roles) {
    var words = JSON.parse(roles.dataset.words), w = 0, c = 0, del = false;
    if (reduce) { roles.textContent = words[0]; } else (function tick() {
      var cur = words[w];
      roles.textContent = cur.slice(0, c);
      if (!del && c === cur.length) { del = true; return setTimeout(tick, 1600); }
      if (del && c === 0) { del = false; w = (w + 1) % words.length; return setTimeout(tick, 350); }
      c += del ? -1 : 1; setTimeout(tick, del ? 35 : 75);
    })();
  }

  // luz que sigue al cursor en la presentación
  var hero = $('.hero');
  if (hero && !reduce) hero.addEventListener('pointermove', function (e) {
    var r = hero.getBoundingClientRect();
    hero.style.setProperty('--mx', (e.clientX - r.left) + 'px'); hero.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });

  // inclinación 3D de las tarjetas
  if (!reduce && matchMedia('(hover: hover)').matches) $$('.proj').forEach(function (c) {
    c.addEventListener('pointermove', function (e) {
      var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      c.style.setProperty('--ry', (x * 7).toFixed(2) + 'deg'); c.style.setProperty('--rx', (-y * 7).toFixed(2) + 'deg');
    });
    c.addEventListener('pointerleave', function () { c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg'); });
  });

  // ventanas emergentes de proyecto
  function openM(slug) {
    var d = document.getElementById('m-' + slug); if (!d) return;
    d.showModal(); document.body.classList.add('lock');
    $$('iframe[data-src]', d).forEach(function (f) { f.src = f.dataset.src; });
    history.replaceState(null, '', '#' + slug);
  }
  function closeM(d) {
    $$('iframe', d).forEach(function (f) { if (!f.dataset.src) { f.dataset.src = f.src; f.src = ''; } });
    document.body.classList.remove('lock');
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  }
  $$('[data-open]').forEach(function (b) { b.addEventListener('click', function () { openM(b.dataset.open); }); });
  $$('dialog.modal').forEach(function (d) {
    d.addEventListener('click', function (e) { if (e.target === d || e.target.hasAttribute('data-close')) d.close(); });
    d.addEventListener('close', function () { closeM(d); });
  });
  var h = location.hash.slice(1); if (h) openM(h);
})();
