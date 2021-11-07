const query = new URLSearchParams(location.search);
console.log(query);
const $ = id => document.getElementById(id);


async function search(search) {
    try {
        let response = await fetch('/api/products/search?search=' + search)
        let result = await response.json();
        console.log(result);
        //<button onclick="confirmRemove(event,document.querySelector('#formDelete${producto.id}'))" type="submit" class="action-button delete-movil"><i class="fas fa-trash"> </i></button>
        if (result.meta.total > 0) {
            document.querySelector('#tabla-productos').innerHTML = "";
            result.data.forEach(producto => {

                let item =
                `
                <tr>
                <td class = "nombre-producto">${producto.name}</td>
                <td class = "nombre-producto">${producto.price}</td>
                <td><img class = "img-product-admin" src="/images/${producto.imagenes[0].name}" alt=""></td>
                <td class = "tdsize">
                    <form action="/products/remove/${producto.id}?_method=DELETE" method="POST" style="display: inline-flex">
                        <button onclick="confirmRemove(event,document.querySelector('#formDelete${producto.id}'))" type="submit" class="action-button delete"><i class="fas fa-trash"> </i> Eliminar</button>
                    </form>
                </td>
                <td class = "tdsize">
                    <a href="/products/edit/${producto.id}" class="action-button  edit-movil"><i class="fas fa-edit"></i></a>
                    <a href="/products/edit/${producto.id}" class="action-button edit"><i class="fas fa-edit"></i> Editar</a>
                </td>
            </tr>
                `
                document.querySelector('#tabla-productos').innerHTML += item;
            });

        } else {
            let msj = `
                <tr>
                    <td colspan = "3">No hay resultados para la búsqueda: ${search}</td>
                </tr>
            `
            document.querySelector('#tabla-productos').innerHTML = msj;
        }
    } catch (error) {
        console.log(error)
    }
}
$('buttom-search-admin').addEventListener('click', (e) => {
    e.preventDefault()
    if($('search-admin').value != ""){
        search($('search-admin').value);
    }
    console.log("apaa")

})

