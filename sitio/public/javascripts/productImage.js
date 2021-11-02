const showPreview = array => {
    const preview = document.getElementById('preview');
    preview.innerHTML = null;
    array.forEach((images,index) => {
        preview.innerHTML +=
        ` <div class="w-25">
                <img class="w-100 h-100" src="/images/${images.name}" alt="" multiple />
                <div>
                    <a onclick="deleteImages('${images.id}')" class="btn btn-danger p-1">Eliminar</a>
                </div>
            </div> `
    });
}
const deleteImages = async id => {
    try {
        let response = await fetch(`/api/products/deleteImages/${id}`)
        let result = await response.json()
        console.log(result.message)
        showPreview(result.images)
    } catch(error){
        console.log(error)
    }
}
const addImages = async(id,files) => {
    let data = new FormData()
    for(const file of files){
        data.append('images',file,file.name)
    }
    console.log(data)
    try{
        let response = await fetch(`/api/products/addImages/${id}`,{
            method : 'POST',
            body : data
        })
        let result = await response.json()
        console.log(result.message)
        showPreview(result.images)
    } catch(error){
        console.log(error)
    }
}