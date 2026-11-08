// Carga el vídeo de YouTube solo cuando se despliega el proyecto
document.querySelectorAll('details.more').forEach(function (d) {
  d.addEventListener('toggle', function () {
    if (!d.open) return;
    d.querySelectorAll('iframe[data-src]').forEach(function (f) { f.src = f.dataset.src; f.removeAttribute('data-src'); });
  });
});
