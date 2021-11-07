let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
let regExPass = /^(?=.*\d)(?=.*[a-z]).{8,12}$/;
let regExString = /^([a-zA-Z]*)$/; 
let regExInt = /^([0-9]*)$/; 
let regExDate = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;

const $ = id => document.getElementById(id);
window.addEventListener('load', () => {

    /* validaciones */

    $('firstName').addEventListener('focus', () => {
        if($('firstName').value.length < 2){
            $('firstName').classList.add('is-invalid')
            $('error-firstName').innerHTML = "el nombre debe tener mas de 1 caracter"
        }
    })
    $('firstName').addEventListener('blur', () => {
        if(!$('firstName').value.trim()){
            $('firstName').classList.add('is-invalid')
            $('error-firstName').innerHTML = "El nombre es obligatorio"
        }else if($('firstName').value.length < 2){
            $('firstName').classList.add('is-invalid')
            $('error-firstName').innerHTML = "El nombre debe tener mas de 1 caracter"
        }else if(!regExString.test($('firstName').value)){
            $('firstName').classList.add('is-invalid')
            $('error-firstName').innerHTML = "Debe contener solo letras"
        }else{
            $('firstName').classList.remove('is-invalid')
            $('firstName').classList.add('is-valid')
            $('error-firstName').innerHTML = null
        }
    })

    $('lastName').addEventListener('blur', () => {
        if(!$('lastName').value.trim()){
            $('lastName').classList.add('is-invalid')
            $('error-lastName').innerHTML = "El apellido es obligatorio"
        }else if($('lastName').value.length < 2){
            console.log("entro");
            $('lastName').classList.add('is-invalid')
            $('error-lastName').innerHTML = "El apellido debe tener mas de 1 caracter"
        }else if(!regExString.test($('lastName').value)){
            $('lastName').classList.add('is-invalid')
            $('error-lastName').innerHTML = "Debe contener solo letras"
        }else{
            $('lastName').classList.remove('is-invalid')
            $('lastName').classList.add('is-valid')
            $('error-lastName').innerHTML = null
        }
    })


    $('email').addEventListener('blur', () => {
        if(!$('email').value.trim()){
            $('email').classList.add('is-invalid')
            $('error-email').innerHTML = "El email es obligatorio"
        }else if(!regExEmail.test($('email').value)){
            $('email').classList.add('is-invalid')
            $('error-email').innerHTML = "Debes ingresar un email válido"
        }else{
            $('email').classList.remove('is-invalid')
            $('email').classList.add('is-valid')
            $('error-email').innerHTML = null
        }
    })

    $('password').addEventListener('blur', () => {
        if(!$('password').value.trim()){
            $('password').classList.add('is-invalid')
            $('error-password').innerHTML = "La contraseña es obligatoria"
        }else if(!regExPass.test($('password').value)){
            $('password').classList.add('is-invalid')
            $('error-password').innerHTML = "La contraseña debe contener entre 8 y 12 caracteres, un numero y una minuscula"
        }else{
            $('password').classList.remove('is-invalid')
            $('password').classList.add('is-valid')
            $('error-password').innerHTML = null
        }
    })

    $('password2').addEventListener('blur', () => {
        if(!$('password2').value.trim()){
            $('password2').classList.add('is-invalid')
            $('error-password2').innerHTML = "Debe repetir la contraseña"
        }else if($('password').value.trim() !== $('password2').value.trim()){
            $('password2').classList.add('is-invalid')
            $('error-password2').innerHTML = "La validación de la contraseña no coincide"
        }else{
            $('password2').classList.remove('is-invalid')
            $('password2').classList.add('is-valid')
            $('error-password2').innerHTML = null
        }
    })

    $('genero').addEventListener('click', () => {
        if(!$('genero').value.trim()){
            $('error-genero').innerHTML = "seleccione un genero"
        }else{
            $('genero').classList.remove('is-invalid')
            $('genero').classList.add('is-valid')
            $('error-genero').innerHTML = null
        }
    })
    $('date').addEventListener('blur', () => {
        if(!$('date').value.trim()){
            $('date').classList.add('is-invalid')
            $('error-date').innerHTML = "coloque su fecha de nacimiento en formato dia/mes/año"
        }else{
            $('date').classList.remove('is-invalid')
            $('date').classList.add('is-valid')
            $('error-date').innerHTML = null
        }
    })

 /* deshabilitar formulario */
 
    $('form-register').addEventListener('submit', e => {
        e.preventDefault();

    // let elementos = $('form-register').elements;
    let error = false;
    // for (let i = 0; i < elementos.length - 1; i++) { 
    //     if(!elementos[i].value){
    //         console.log("error")
    //         console.log(elementos[i])
    //         console.log(elementos[i].value)
    //         elementos[i].classList.add('is-invalid')
    //         $('error-campos-vacios').innerHTML = 'Todos los campos son obligatorios';
    //         error = true
    //     }
    // }

            if($('firstName').value.length < 2){
                $('firstName').classList.add('is-invalid')
                $('error-firstName').innerHTML = "el nombre debe tener mas de 1 caracter"
                error = true
            }

        

            if(!$('firstName').value.trim()){
                $('firstName').classList.add('is-invalid')
                $('error-firstName').innerHTML = "El nombre es obligatorio"
                error = true
            }else if($('firstName').value.length < 2){
                $('firstName').classList.add('is-invalid')
                error = true
                $('error-firstName').innerHTML = "El nombre debe tener mas de 1 caracter"
            }else if(!regExString.test($('firstName').value)){
                $('firstName').classList.add('is-invalid')
                $('error-firstName').innerHTML = "Debe contener solo letras"
                error = true
            }



            if(!$('lastName').value.trim()){
                $('lastName').classList.add('is-invalid')
                $('error-lastName').innerHTML = "El apellido es obligatorio"
                error = true
            }else if($('lastName').value.length < 2){
                console.log("entro");
                $('lastName').classList.add('is-invalid')
                $('error-lastName').innerHTML = "El apellido debe tener mas de 1 caracter"
                error = true
            }else if(!regExString.test($('lastName').value)){
                $('lastName').classList.add('is-invalid')
                $('error-lastName').innerHTML = "Debe contener solo letras"
                error = true
            }


            if(!$('email').value.trim()){
                $('email').classList.add('is-invalid')
                $('error-email').innerHTML = "El email es obligatorio"
                error = true
            }else if(!regExEmail.test($('email').value)){
                $('email').classList.add('is-invalid')
                $('error-email').innerHTML = "Debes ingresar un email válido"
                error = true
            }




            if(!$('password').value.trim()){
                $('password').classList.add('is-invalid')
                $('error-password').innerHTML = "La contraseña es obligatoria"
                error = true
            }else if(!regExPass.test($('password').value)){
                $('password').classList.add('is-invalid')
                $('error-password').innerHTML = "La contraseña debe contener entre 8 y 12 caracteres, un numero y una minuscula"
                error = true
            }


            if(!$('password2').value.trim()){
                $('password2').classList.add('is-invalid')
                $('error-password2').innerHTML = "Debe repetir la contraseña"
                error = true
            }else if($('password').value.trim() !== $('password2').value.trim()){
                $('password2').classList.add('is-invalid')
                $('error-password2').innerHTML = "La validación de la contraseña no coincide"
                error = true
            }




            if(!$('genero').value.trim()){
                $('error-genero').innerHTML = "seleccione un genero"
                error = true
            }


            if(!$('date').value.trim()){
                $('date').classList.add('is-invalid')
                $('error-date').innerHTML = "coloque su fecha de nacimiento en formato dia/mes/año"
                error = true
            }



    if(!error){
        $('form-register').submit()
    }else{
        $('error-campos-vacios').innerHTML = 'Todos los campos son obligatorios'; 
    }

    })

})