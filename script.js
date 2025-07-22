//Menú hamburguesa ↓
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const header = document.getElementById('header');  // Agrega el ID al <nav>

// Función para abrir/cerrar menú hamburguesa
function navToggle() {
  btn.classList.toggle('open');
  nav.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', navToggle);

// Mostrar / ocultar HEADER al hacer scroll
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Si el menú está abierto, que el header no se esconda
  if (btn.classList.contains('open')) {
    header.style.top = '0';
    return;
  }

  if (currentScroll <= 0) {
    header.style.top = '0';
    return;
  }

  if (currentScroll > lastScroll) {
    // Scroll hacia abajo - ocultar header
    header.style.top = '-100px';  // Ajusta según la altura real de tu header
  } else {
    // Scroll hacia arriba - mostrar header
    header.style.top = '0';
  }

  lastScroll = currentScroll;
});

//Menú hamburguesa ↑

//Descargar imagen ↓
  function descargarImagen() {
    const url = 'img/menu.jpg'; // Ruta de tu imagen
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Menú Don Chicho'; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
//Descargar imagen ↑
