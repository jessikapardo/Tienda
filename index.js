// ABRIR Y CERRAR CARRITO 

const botonAbrirCarrito = document.getElementById("btn-carrito")
const botonCerrarCarrito = document.getElementById("btn-cerrar-carrito")
const carrito = document.getElementById("carrito")
const overlay = document.getElementById("overlay")



// ABRIR Y CERRAR CARRITO 

botonAbrirCarrito.onclick = () => {
    overlay.classList.remove("hidden")
    document.body.classList.add("no-scroll")
    carrito.classList.add("mostrar-carrito")
}

botonCerrarCarrito.onclick = () => {
    overlay.classList.add("hidden")
    document.body.classList.remove("no-scroll")
    carrito.classList.remove("mostrar-carrito")
}