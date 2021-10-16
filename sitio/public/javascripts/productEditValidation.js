const $ = id => document.getElementById(id);


window.addEventListener('load', () => {
    console.log("productEditValidation connected success");
    // Validaciones Frontend 
    $('name').addEventListener('blur', () => {
        if (!$('name').value.trim()) {
            $('name').classList.add('is-invalid')
            $('errorName').innerHTML = "El nombre del producto es obligatorio"
        } else if($('name').value.length < 4 || $('name').value.length > 40 ){
            $('name').classList.add('is-invalid')
            $('errorName').innerHTML = "El nombre debe tener al menos 5 y como máximo 40 carateres"
        }
         else {
            $('name').classList.remove('is-invalid')
            $('name').classList.add('is-valid')
            $('errorName').innerHTML = null
        }
    });
    $('description').addEventListener('blur', () => {
        if (!$('description').value.trim()) {
            $('description').classList.add('is-invalid')
            $('errorDescription').innerHTML = "La descripción del producto es obligatoria"
        } else if($('description').value.length < 19 || $('description').value.length > 1001){
            $('description').classList.add('is-invalid')
            $('errorDescription').innerHTML = "La descripción del producto debe tener entre 20 y 500 caracteres"
        } 
        else {
            $('description').classList.remove('is-invalid')
            $('description').classList.add('is-valid')
            $('errorDescription').innerHTML = null
        }
    });
    $('price').addEventListener('blur', () => {
        if (!$('price').value.trim()) {
            $('price').classList.add('is-invalid')
            $('errorPrice').innerHTML = "El precio del producto es obligatorio"
        } 
         else {
            $('price').classList.remove('is-invalid')
            $('price').classList.add('is-valid')
            $('errorPrice').innerHTML = null 
        }
    });
    $('stock').addEventListener('blur', () => {
        if (!$('stock').value.trim()) {
            $('stock').classList.add('is-invalid')
            $('errorStock').innerHTML = "El número de stock del producto es obligatorio"
        } else {
            $('stock').classList.remove('is-invalid')
            $('stock').classList.add('is-valid')
            $('errorStock').innerHTML = null
        }
    });
    $('cuotas').addEventListener('blur', () => {
        if (!$('cuotas').value.trim()) {
            $('cuotas').classList.add('is-invalid')
            $('errorCuotas').innerHTML = "El número de cuotas del producto es obligatorio"
        } else {
            $('cuotas').classList.remove('is-invalid')
            $('cuotas').classList.add('is-valid')
            $('errorCuotas').innerHTML = null
        }
    });
    // Envio del formulario 
    $('form-productEdit').addEventListener('submit', e => {
        e.preventDefault()
        let elementosForm = $('form-productEdit').elements;
        for (let i = 0; i < elementosForm.length - 1; i++) {
            if(!elementosForm[i].value){
             
                elementosForm.classList.add('is-invalid')
                $('error-empty').innerHTML = "Los campos señalados son obligatorios"
            }
            
        }
    })
})