var imagenesMostradas = false; // Variable para rastrear si las imágenes están mostradas o no

function toggleImagenes() {
    var imagenes = document.querySelectorAll('.imagen'); // Seleccionar todas las imágenes
    var boton = document.getElementById('toggleButton');

    if (imagenesMostradas) {
        // Si las imágenes están mostradas, ocultarlas
        for (var i = 0; i < imagenes.length; i++) {
            imagenes[i].style.display = 'none'; // Ocultar cada imagen
        }
        boton.innerText = 'PRODUCTOS 1'; // Cambiar el texto del botón
    } else {
        // Si las imágenes están ocultas, mostrarlas
        for (var i = 0; i < imagenes.length; i++) {
            imagenes[i].style.display = 'block'; // Mostrar cada imagen
        }
        boton.innerText = 'PRODUCTOS 1'; // Cambiar el texto del botón
    }

    // Cambiar el estado de las imágenes mostradas
    imagenesMostradas = !imagenesMostradas;
}

