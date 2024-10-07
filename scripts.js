// scripts.js

let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');

    // Limpiar la lista actual
    listaCarrito.innerHTML = '';

    // Agregar cada ítem del carrito a la lista
    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        // Opción para eliminar ítem
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = '✖';
        eliminarBtn.style.background = 'none';
        eliminarBtn.style.border = 'none';
        eliminarBtn.style.color = 'red';
        eliminarBtn.style.cursor = 'pointer';
        eliminarBtn.onclick = () => eliminarDelCarrito(index);
        li.appendChild(eliminarBtn);
        listaCarrito.appendChild(li);
    });

    // Actualizar el total
    totalElemento.textContent = total;

    // Mostrar u ocultar el carrito según si hay ítems
    const carritoSeccion = document.getElementById('carrito');
    if (carrito.length === 0) {
        carritoSeccion.style.display = 'none';
    } else {
        carritoSeccion.style.display = 'block';
    }
}

function eliminarDelCarrito(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Manejar la finalización de la compra
document.getElementById('finalizar-compra').addEventListener('click', () => {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío.');
    } else {
        alert(`Gracias por tu compra! Total: $${total}`);
        carrito = [];
        total = 0;
        actualizarCarrito();
    }
});

// Inicialmente ocultar el carrito
document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito();
});
