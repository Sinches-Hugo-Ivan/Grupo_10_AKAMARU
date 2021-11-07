let changuito = document.querySelector('#tabla-carrito'); //caja donde se van agregar los productos del carrito
let cartEmpty = document.querySelector('.cart-empty'); //span con la leyenda: no hay productos agregados
let spanCantidad = document.querySelector('.fa-shopping-cart');
let tablaCompras = document.querySelector('.tabla-carrito');
let precioTotal = document.querySelector('.precio');
const urlBase = window.origin; //url base del sitio

const mostrarCantidad = changuito => {
    var cantidad = 0;
    var total = 0;
    if(changuito){
        changuito.forEach(item => {
            cantidad += item.cantidad
            total += item.total
        });
    }
    if(spanCantidad){
        spanCantidad.innerHTML = cantidad
        spanCantidad.innerHTML = `<span class ="cantidad-carrito">${cantidad}</span>`
        precioTotal.innerHTML = `<span>$${total}</span>`
    }

    if(cantidad == 0){
        console.log('entro')
        tablaCompras.setAttribute('hidden',true);
        // cartHead.style.display = 'none'
        // cartFooter.style.display = 'none'
        // cartEmpty.setAttribute('hidden',true);
        cartEmpty.style.display = 'block'
        // btnCartEmpty.classList.add('disabled');
        // btnNextBuy.classList.add('disabled');
    }else{
        tablaCompras.setAttribute('disabled',true);
        // cartHead.style.display = "table-header-group"
        // cartFooter.style.display = 'table-footer-group'
        cartEmpty.style.display = 'none'        
        // btnCartEmpty.classList.remove('disabled');
        // btnNextBuy.classList.remove('disabled');
    }

}


const mostrarProductos = carrito => {
    changuito.innerHTML = ""
    carrito.forEach(producto =>{
        let product = `
        <tr>
            <th class = "tr-contenido"><img class="img-carrito" src="/images/${producto.imagen}" alt="producto"></th>
            <th class = "tr-contenido">${producto.nombre}</th>
            <th class = "tr-contenido">  
            <a class="text-danger h5" onClick="quitarItem(event,${producto.id})"><i class="fas fa-minus-square"></i></a>
                <span class="h5">${producto.cantidad}<span>
            <a class="text-success h5" onClick="agregarItem(event,${producto.id})"><i class="fas fa-plus-square"></i></a>                     
            </th>
            <th class = "tr-contenido">$${producto.precio}</th>
            <th class = "tr-contenido">$${producto.total}</th>
        </tr>
        `;
 
        changuito.innerHTML += product;
    })
}

const show = async () => {
    try {
        let response = await fetch(urlBase+'/api/carts/show')
        let result = await response.json();
        mostrarCantidad(result.data);
        mostrarProductos(result.data);

    }catch (error) {
        console.log(error)
    }
}


function cerrarsession(){
    Swal.fire({
        // icon:'warning',
       title: "Para agregar un producto debes iniciar sesión",
       showCloseButton: true,
       closeButtonAriaLabel:'Cerrar Alerta',
    });
}

const agregarItem = async (e,id) =>{
    e.preventDefault(e)
    try {
        let response = await fetch(urlBase+'/api/carts/add/' + id)
        let result = await response.json();
        mostrarCantidad(result.data);
        mostrarProductos(result.data);
    }catch (error) {
        console.log(error)
    }
    console.log('producto '+ id +' agregado')

}
const quitarItem = async (e,id) => {
    e.preventDefault()
    try {
        let response = await fetch(urlBase + '/api/carts/remove/' + id)
        let result = await response.json()
        mostrarCantidad(result.data);
        mostrarProductos(result.data);

    } catch (error) {
        console.log(error)
    }
    console.log('producto '+ id +' eliminado')
}

const empty = async () => {
    try {
        let response = await fetch(urlBase + '/api/carts/empty')
        let result = await response.json()
        changuito.innerHTML = ""
        mostrarCantidad(result.data)
    } catch (error) {
        console.log(error)
    }
}
show();