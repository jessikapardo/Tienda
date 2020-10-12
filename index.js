// FILTROS //////////////////////
const productos = document.querySelectorAll('.producto');
const filtroBusqueda = document.querySelector('#busqueda-filtro');
const filtroCategoria = document.querySelectorAll(".categoria-vinos");
const filtroPuntaje = document.querySelectorAll(".filtro-review");

// ABRIR Y CERRAR CARRITO /////////////////////////
const botonAbrirCarrito = document.getElementById("btn-carrito")
const botonCerrarCarrito = document.getElementById("btn-cerrar-carrito")
const carrito = document.getElementById("carrito")
const overlay = document.getElementById("overlay")


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

// ver si el producto para el filtro de la busqueda
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