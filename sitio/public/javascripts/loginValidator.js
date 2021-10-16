let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
let regExPass = /^(?=.*\d)(?=.*[a-z]).{8,12}$/;

const $ = id => document.getElementById(id);

window.addEventListener('load', () => {

    /* validaciones */

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

    // $('password').addEventListener('blur', () => {
    //     if(!$('password').value.trim()){
    //         $('password').classList.add('is-invalid')
    //         $('error-password').innerHTML = "La contraseña es obligatoria"
    //     }else if(!regExPass.test($('password').value)){
    //         $('password').classList.add('is-invalid')
    //         $('error-password').innerHTML = "La contraseña debe contener entre 8 y 12 caracteres, un numero y una minuscula"
    //     }else{
    //         $('password').classList.remove('is-invalid')
    //         $('password').classList.add('is-valid')
    //         $('error-password').innerHTML = null
    //     }
    // })

 /* deshabilitar formulario */
 
$('form-login').addEventListener('submit', e => {
    e.preventDefault();

    let elementos = $('form-login').elements;
    let error = false;
    // for (let i = 0; i < elementos.length - 1; i++) { 
    //     if(!elementos[i].value){
    //         elementos[i].classList.add('is-invalid')
    //         $('error-campos-vacios').innerHTML = 'Todos los campos son obligatorios';
    //         error = true
    //     }
    // }

    if(!error){
        $('form-login').submit()
    }

})

})