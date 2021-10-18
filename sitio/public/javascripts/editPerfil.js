const $ = id => document.getElementById(id);
let ExRegExt = /(jpg|jpeg|png|gif|webp)$/i;
let regExString = /^([a-zA-Z]*)$/;

window.addEventListener('load', () => {
    console.log('editPerfilValidator connected success');


    // FORMULARIOS
    const form = $('editPerfil');

    // CAMPOS A VALIDAR
    const images = $('archivo');
    const inputName = $('nombre');
    const inputApellido = $('apellido');
    const inputFecha = $('fecha');
    const inputGenero = $('genero');


    /* validaciones */

    // validar imagen
    images.addEventListener('change', () => {
        var nombreImg = images.files;
        var contador = 0;
        for (i = 0; i < nombreImg.length; i++) {
            console.log(nombreImg[i].type)
            if (!ExRegExt.test(nombreImg[i].type)) {
                contador = contador + 1;
            }
        }
        if (contador == 0) {
            images.classList.remove('is-invalid')
            images.classList.add('is-valid')
            $('error-images').innerHTML = null
        } else {
            images.classList.add('is-invalid');
            $('error-images').innerHTML = "Debe subir un archivo con extension: jpg, jpeg, gif, png o webp"
        }

    })

    // validar nombre
    inputName.addEventListener('focus', () => {
        if (inputName.value.length < 2) {
            inputName.classList.add('is-invalid')
            $('error-nombre').innerHTML = "el nombre debe tener mas de 1 caracter"
        }
    })
    inputName.addEventListener('blur', () => {
        if (!inputName.value.trim()) {
            inputName.classList.add('is-invalid')
            $('error-nombre').innerHTML = "El nombre es obligatorio"
        } else if (inputName.value.length < 2) {
            inputName.classList.add('is-invalid')
            $('error-nombre').innerHTML = "El nombre debe tener mas de 1 caracter"
        } else if (!regExString.test(inputName.value)) {
            inputName.classList.add('is-invalid')
            $('error-nombre').innerHTML = "Debe contener solo letras"
        } else {
            inputName.classList.remove('is-invalid')
            inputName.classList.add('is-valid')
            $('error-nombre').innerHTML = null
        }
    })

    // validar apellido
    inputApellido.addEventListener('blur', () => {
        if (!inputApellido.value.trim()) {
            inputApellido.classList.add('is-invalid')
            $('error-apellido').innerHTML = "El apellido es obligatorio"
        } else if (inputApellido.value.length < 2) {
            inputApellido.classList.add('is-invalid')
            $('error-apellido').innerHTML = "El apellido debe tener mas de 1 caracter"
        } else if (!regExString.test(inputApellido.value)) {
            inputApellido.classList.add('is-invalid')
            $('error-apellido').innerHTML = "Debe contener solo letras"
        } else {
            inputApellido.classList.remove('is-invalid')
            inputApellido.classList.add('is-valid')
            $('error-apellido').innerHTML = null
        }
    })




    // validar fecha
    inputFecha.addEventListener('blur', () => {
        if (!inputFecha.value.trim()) {
            inputFecha.classList.add('is-invalid')
            $('error-fecha').innerHTML = "Coloque su fecha de nacimiento en formato dia/mes/año"
        } else {
            inputFecha.classList.remove('is-invalid')
            inputFecha.classList.add('is-valid')
            $('error-fecha').innerHTML = null
        }
    })

    // validar genero
    inputGenero.addEventListener('click', () => {
        if (!inputGenero.value.trim()) {
            $('error-genero').innerHTML = "seleccione un genero"
        } else {
            inputGenero.classList.remove('is-invalid')
            inputGenero.classList.add('is-valid')
            $('error-genero').innerHTML = null
        }
    })




    /* deshabilitar formulario */

    form.addEventListener('submit', e => {
        e.preventDefault();
    
        let elemnetosForm = form.elements;
        let error = false;
    
        for (let i = 0; i < elemnetosForm.length - 1; i++) {
            
            if(!elemnetosForm[i].value){
                elemnetosForm[i].classList.add('is-invalid')
                $('error-empty').innerHTML = 'Los campos señalados son obligatorios';
                error = true
            }
        }
    
        if(!error){
            form.submit()
        }
    })

})
