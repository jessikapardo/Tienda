// ABRIR Y CERRAR CARRITO /////////////////////////
const botonAbrirCarrito = document.getElementById("btn-carrito")
const botonCerrarCarrito = document.getElementById("btn-cerrar-carrito")
const carrito = document.getElementById("carrito")
const overlay = document.getElementById("overlay")
const textoCarritoVacio = document.querySelector(".carrito-vacio")
const carritoConProductos = document.querySelector(".carrito-con-productos")
const subtotalCarrito = document.querySelector(".subtotal-carrito")
const botonesCarrito = document.querySelector(".botones-carrito")

// PRODUCTOS EN LISTA O GRILLA//////////////////
const contenedorProductos = document.querySelector(".contenedor-productos")
const botonLista = document.querySelector(".btn-lista")
const botonGrilla = document.querySelector(".btn-grilla")

// ABRIR Y CERRAR CHECKOUT/////////////////////
const botonAbrirCheckout = document.querySelector(".btn-comprar-carrito")
const botonCerrarCheckout = document.querySelector(".btn-seguir-comprando")
const checkout = document.getElementById("checkout")
const overlayCheckout = document.getElementById("overlay-checkout")

// ABRIR Y CERRAR MODAL/////////////////////
const botonAbrirModal = document.querySelector(".btn-vaciar-carrito")
const botonCerrarModal = document.querySelector(".btn-modal")
const botonVaciarModal = document.querySelector(".btn-modal-vaciar")
const modal = document.getElementById("modal")

// FILTROS //////////////////////
const productos = document.querySelectorAll(".producto");
const filtroBusqueda = document.querySelector("#busqueda-filtro");
const filtroCategoria = document.querySelectorAll(".categoria-vinos");
const filtroPuntaje = document.querySelectorAll(".filtro-review");
const botonLimpiarFiltros = document.querySelector("#limpiar-filtros")



///////////////// ABRIR Y CERRAR CARRITO /////////////////////////

// Abrir carrito
botonAbrirCarrito.onclick = () => {
    overlay.classList.remove("hidden")
    document.body.classList.add("no-scroll")
    carrito.classList.add("mostrar-carrito")
}

// Cerrar carrito
botonCerrarCarrito.onclick = () => {
    overlay.classList.add("hidden")
    document.body.classList.remove("no-scroll")
    carrito.classList.remove("mostrar-carrito")
    textoCarritoVacio.classList.add("hidden")
    carritoConProductos.classList.remove("hidden")
    subtotalCarrito.classList.remove("hidden")
    botonesCarrito.classList.remove("hidden")
}


///////////////// PRODUCTOS EN LISTA O GRILLA /////////////////////////

// Productos en lista
botonLista.onclick = () => {
    contenedorProductos.classList.add("lista")
    contenedorProductos.classList.remove("grilla")
}

// Productos en grilla
botonGrilla.onclick = () => {
    contenedorProductos.classList.add("grilla")
    contenedorProductos.classList.remove("lista")
}


///////////////// ABRIR Y CERRAR CHECKOUT /////////////////////////

// Abrir checkout
botonAbrirCheckout.onclick = () => {
    overlayCheckout.classList.remove("hidden")
    document.body.classList.add("no-scroll")
    checkout.classList.remove("hidden")
}

// Cerrar checkout
botonCerrarCheckout.onclick = () => {
    overlayCheckout.classList.add("hidden")
    document.body.classList.remove("no-scroll")
    checkout.classList.add("hidden")
}

///////////////// ABRIR Y CERRAR MODAL  /////////////////////////

// Abrir carrito
botonAbrirModal.onclick = () => {
    overlayCheckout.classList.remove("hidden")
    document.body.classList.add("no-scroll")
    modal.classList.remove("hidden")
}

// Cerrar carrito
botonCerrarModal.onclick = () => {
    overlayCheckout.classList.add("hidden")
    document.body.classList.remove("no-scroll")
    modal.classList.add("hidden")
}

botonVaciarModal.onclick = () => {
    overlayCheckout.classList.add("hidden")
    document.body.classList.remove("no-scroll")
    modal.classList.add("hidden")
    textoCarritoVacio.classList.remove("hidden")
    carritoConProductos.classList.add("hidden")
    subtotalCarrito.classList.add("hidden")
    botonesCarrito.classList.add("hidden")
}


///////////////// FILTROS /////////////////////////////////

// Ocultar y mostrar tarjeta producto

const ocultarTarjeta = (producto) => {
    return producto.classList.add("hidden")
}

const mostrarTarjeta = (producto) => {
    return producto.classList.remove("hidden")
}

// eventos
filtroBusqueda.oninput = () => {
    filtrarTarjetas()
}

for (let categoria of filtroCategoria) {
    categoria.oninput = () => {
        filtrarTarjetas()
    }
}

for (let puntaje of filtroPuntaje) {
    puntaje.oninput = () => {
        filtrarTarjetas()
    }
}

// Filtrar tarjetas
const filtrarTarjetas = () => {
    for (let producto of productos) {
        if (pasaFiltros(producto)) {
            mostrarTarjeta(producto)
        } else {
            ocultarTarjeta(producto)
        }
    }
}

// Ver si hay alguna categoría seleccionada
const hayAlgunaCategoriaChequeado = () => {
    for (let categoria of filtroCategoria) {
        if (categoria.checked) {
            return true
        }
    }
    return false
}

// Ver si hay algun puntaje seleccionado
const hayAlgunPuntajeChequeado = () => {
    for (let puntaje of filtroPuntaje) {
        if (puntaje.checked) {
            return true
        }
    }
    return false
}

// Ver si hay algo escrito en la busqueda
const hayAlgoEscritoEnElInput = () => {
    if (filtroBusqueda.value) {
        return true
    } else {
        return false
    }
}

// Ver si lo escrito en la busqueda coincide con el producto
const compararInputConTarjeta = (producto) => {
    if (producto.dataset.nombre.includes(filtroBusqueda.value.toLowerCase())) {
        return true
    } else {
        return false
    }
}

// Ver si el puntaje coincide con el producto
const compararPuntajeConTarjeta = (producto) => {
    for (let puntaje of filtroPuntaje) {
        if (puntaje.checked) {
            if (puntaje.value === producto.dataset.rating) {
                return true
            }
        }
    }
    return false
}

// Ver si la categoria coincide con el producto
const compararCategoriaConTarjeta = (producto) => {
    for (let categoria of filtroCategoria) {
        if (categoria.checked) {
            if (categoria.value === producto.dataset.categoria) {
                return true
            }
        }
    }
    return false
}

// ver si el producto pasa el filtro de la busqueda
const pasaFiltroInput = (producto) => {
    if (hayAlgoEscritoEnElInput()) {
        if (compararInputConTarjeta(producto)) {
            return true
        } else {
            return false
        }
    } else {
        return true
    }
}

// ver si el producto para el filtro de categoria
const pasaFiltroCategoria = (producto) => {
    if (hayAlgunaCategoriaChequeado()) {
        if (compararCategoriaConTarjeta(producto)) {
            return true
        } else {
            return false
        }
    } else {
        return true
    }
}

// ver si el producto para el filtro de puntaje
const pasaFiltroPuntaje = (producto) => {
    if (hayAlgunPuntajeChequeado()) {
        if (compararPuntajeConTarjeta(producto)) {
            return true
        } else {
            return false
        }
    } else {
        return true
    }

}

// Ver si el producto cumple con todo y pasa filtro
const pasaFiltros = (producto) => {
    if (pasaFiltroInput(producto) && pasaFiltroCategoria(producto) && pasaFiltroPuntaje(producto)) {
        return true
    } else {
        return false
    }
}

// Limpiar todos los filtros

botonLimpiarFiltros.onclick = () => {
    filtroBusqueda.value = ""
    for (let categoria of filtroCategoria) {
        categoria.checked = false
    }
    for (let puntaje of filtroPuntaje) {
        puntaje.checked = false
    }
    for (let producto of productos) {
        producto.classList.remove('hidden')
    }
}