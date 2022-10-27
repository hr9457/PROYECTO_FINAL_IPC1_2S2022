




// funcion espera que carge primero la pagina con todos sus elementos y despues acciona 
window.addEventListener('load', function() {
    console.log('La página ha terminado de cargarse!!');
    var contenedor = document.getElementById('titulo');
    var usuario =  localStorage.getItem("nombre");

    console.log(usuario);

    contenedor.innerHTML = `<h2> ${usuario} <h2>`;
});



var btn = document.getElementById('btnBuscar');
btn.addEventListener('click',async function saludar2(){

    let url = 'http://localhost:4000/card';


    // hacer la consulta a mi api con la informacion
    const respuesta = await fetch(url)
    .then((res)=> res.json())
    .then((data) => {
        return data
    });

    // recolectar mi informacion
    console.log(respuesta);


    // // manipular mir informacion para mostrasela a mi usuario
    var panelRespuesta = document.getElementById('cards');
    panelRespuesta.innerHTML = `<div class="card" style="width: 10rem;">
    <img src=" ${respuesta.Imagen} " class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${respuesta.Nombre} </h5>
      <p class="card-text">Seleccion: ${respuesta.Pais} </p>
      <p class="card-text">Region: ${respuesta.Region} </p>
    </div>
  </div>`;


    
    
});
    
