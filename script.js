//Menú hamburguesa ↓
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function navToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')
} 
btn.addEventListener('click', navToggle)
//Menú hamburguesa ↑

//Descargar imagen ↓
  function descargarImagen() {
    const url = 'img/iconos/menu.jpg'; // Ruta de tu imagen
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Menú Don Chicho'; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
//Descargar imagen ↑
