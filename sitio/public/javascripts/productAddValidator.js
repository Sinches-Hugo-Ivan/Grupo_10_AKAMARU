const $ = id => document.getElementById(id);

window.addEventListener("load", function(){
    const formProductAdd = $('form-productAdd');

    $('name').addEventListener('focus', function(){
        $('errorName').innerHTML = "El nombre debe contener, al menos, 5 caracteres"
    })

    $('name').addEventListener('blur', function(){
        if(!$('name').value.trim()){
            $('name').classList.add('is-invalid');
            $('errorName').innerHTML = "Debe ingresar un nombre"
        } else {
            if($('name').value.length >= 5){
            $('name').classList.remove('is-invalid');
            $('name').classList.add('is-valid');
            $('errorName').innerHTML = null;
            }
        }
    })

    $('description').addEventListener('focus', function(){
        $('errorDesc').innerHTML = "La descripción debe contener, al menos, 20 caracteres"
    })

    $('description').addEventListener('blur', function(){
        if(!$('description').value.trim()){
            $('description').classList.add('is-invalid');
            $('errorDesc').innerHTML = "Debe ingresar una descripción"
        } else {
            if($('description').value.length >= 20){
            $('description').classList.remove('is-invalid');
            $('description').classList.add('is-valid')
            $('errorDesc').innerHTML = null;
        }
    }
    })

    $('price').addEventListener('blur', function(){
        if(!$('price').value.trim()){
            $('price').classList.add('is-invalid');
            $('errorPrice').innerHTML = "Debe ingresar un precio"
        } else {
            $('price').classList.remove('is-invalid');
            $('price').classList.add('is-valid')
            $('errorPrice').innerHTML = null;
        }
    })

    $('cuotas').addEventListener('blur', function(){
        if(!$('cuotas').value.trim()){
            $('cuotas').classList.add('is-invalid');
            $('errorCuotas').innerHTML = "Debe ingresar la cantidad de cuotas disponibles para pagar el producto"
        } else {
            $('cuotas').classList.remove('is-invalid');
            $('cuotas').classList.add('is-valid')
            $('errorCuotas').innerHTML = null;
        }
    })

    $('stock').addEventListener('blur', function(){
        if(!$('stock').value.trim()){
            $('stock').classList.add('is-invalid');
            $('errorStock').innerHTML = "Debe ingresar las existencias que hay de este producto"
        } else {
            $('stock').classList.remove('is-invalid');
            $('stock').classList.add('is-valid')
            $('errorStock').innerHTML = null;
        }
    })

    formProductAdd.addEventListener('submit', function(e){
        e.preventDefault();

        let elementosForm = $('form-productAdd').elements;
        let error = false

        for (let i = 0; i < elementosForm.length - 1; i++) {
            if (!elementosForm[i].value) {
                elementosForm[i].classList.add('is-invalid')
                $('errorEmpty').innerHTML = "Los campos señalados son obligatorios"
                let error = true
            }
            
        }

        if(!error){
            $('form-productAdd').submit()
        }

        
    })
})