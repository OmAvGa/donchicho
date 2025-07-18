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