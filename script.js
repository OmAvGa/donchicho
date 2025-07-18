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
    const url = 'img/menu.jpg'; // Ruta de tu imagen
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Menú Don Chicho'; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
//Descargar imagen ↑


//Mapa 
function cargarSucursal(nombre) {
  const mapa = document.getElementById("mapaFrame");
  const apiKey = "AIzaSyAoiHFMeG5_bZFIHeqOz2BMBXfdly44oeQ";
  let direccion = "";

  if (nombre === "matriz") {
    direccion = "Av. Agustín Yáñez 135, Tepeyac, 47900 Jamay, Jal.";
  } else if (nombre === "pasaje") {
    direccion = "Morelos 13-A, Centro, 47900 Jamay, Jal.";
  } else if (nombre === "parroquia") {
    direccion = "Allende 69, Centro, 47900 Jamay, Jal.";
  }

  const url = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(direccion)}`;
  mapa.src = url;
}

//Mapa

let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('carrito');
  lista.innerHTML = '';

  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });
}

function enviarWhatsApp() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  let mensaje = '¡Hola! Quiero pedir:\n';
  let total = 0;

  carrito.forEach((item, i) => {
    mensaje += `${i + 1}. ${item.nombre} - $${item.precio}\n`;
    total += item.precio;
  });

  mensaje += `\nTotal: $${total}`;

  const numeroTelefono = '523921021698'; // Cambia esto a tu número (con código país)
  const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, '_blank');
}


//Cargar pagina de mientras
document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los contenedores que tienen imágenes (puedes ajustar selector)
  const imageWrappers = document.querySelectorAll('.order-items > div, .order-items2 > div');

  imageWrappers.forEach(wrapper => {
    const img = wrapper.querySelector('img');
    if (!img) return;

    // Crea el logo girando
    const logo = document.createElement('img');
    logo.src = '/img/logosinmarco.png';  // Cambia por la ruta real
    logo.alt = 'Cargando...';
    logo.classList.add('loading-logo');

    // Aplica estilos para posición (usa CSS para eso, este solo es un ejemplo rápido)
    logo.style.position = 'absolute';
    logo.style.top = '50%';
    logo.style.left = '50%';
    logo.style.transform = 'translate(-50%, -50%)';
    logo.style.zIndex = '10';
    logo.style.width = '100px';
    logo.style.height = '100px';
    logo.style.animation = 'spin 2s linear infinite';

    // Posiciona el wrapper para que sea relativo y el logo quede encima
    wrapper.style.position = 'relative';

    // Inserta el logo antes de la imagen
    wrapper.insertBefore(logo, img);

    // Oculta la imagen inicialmente
    img.style.display = 'none';
    img.style.position = 'absolute';
    img.style.top = '0';
    img.style.left = '0';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.zIndex = '5';

    // Cuando la imagen cargue, oculta el logo y muestra la imagen
    img.addEventListener('load', () => {
      logo.style.display = 'none';
      img.style.display = 'block';
    });

    // Si la imagen ya está en caché y cargada
    if (img.complete && img.naturalHeight !== 0) {
      logo.style.display = 'none';
      img.style.display = 'block';
    }
  });
});
