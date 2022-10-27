




// funcion espera que carge primero la pagina con todos sus elementos y despues acciona 
window.addEventListener('load', function() {
    console.log('La página ha terminado de cargarse!!');
    var contenedor = document.getElementById('titulo');
    var usuario =  localStorage.getItem("nombre");

    console.log(usuario);

    contenedor.innerHTML = `<h2> ${usuario} <h2>`;
});


