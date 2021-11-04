const confirmRemove = (event ,form) => {
  event.preventDefault()
  Swal.fire({
      title: 'Esta seguro que quiere eliminar este producto?',
      text: "Una vez que elimine el producto, ya no estará disponible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar el producto!'
    }).then((result) => {
      if (result.isConfirmed) {
        form.submit();
        Swal.fire(
          'Eliminado!',
          'El producto ha sido eliminado con éxito.',
          'success'
        )
       
      }
    })

}
 