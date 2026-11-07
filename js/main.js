// Menú móvil
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;
  const bars = toggle.querySelectorAll('.bar');
  function set(open) {
    menu.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', open);
    bars[0].style.transform = open ? 'translateY(8px) rotate(45deg)' : '';
    bars[1].style.opacity = open ? '0' : '';
    bars[2].style.transform = open ? 'translateY(-8px) rotate(-45deg)' : '';
  }
  toggle.addEventListener('click', () => set(!menu.classList.contains('active')));
  toggle.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); set(!menu.classList.contains('active')); } });
  menu.querySelectorAll('.nav-link').forEach(a => a.addEventListener('click', () => set(false)));
});
