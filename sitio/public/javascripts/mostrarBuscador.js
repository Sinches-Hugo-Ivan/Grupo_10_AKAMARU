const elemento = document.getElementById('buscador');
document.addEventListener('DOMContentLoaded', e => {
    // Comprobar la direccion
    if(document.location.href.includes('search'))
        elemento.classList.add('mostrar')
})

