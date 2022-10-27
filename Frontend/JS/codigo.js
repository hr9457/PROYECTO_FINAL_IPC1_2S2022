
var btn = document.getElementById('btnPrueba');




// funcion para js
btn.addEventListener('click',async function saludar2(){

    let url = 'http://localhost:4000/login';

    var text1 = document.getElementById('usuario').value;
    var text2 = document.getElementById('password').value;



    // primer paso creqr un json con la infrmacion que necesite mi backend
    var data = {
        usuario: text1,
        password: text2
    }

    console.log(data);

    // hacer la consulta a mi api con la informacion
    const respuesta = await fetch(url,{
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
        'Content-Type': 'application/json'
        }
    })
    .then((res)=> res.json())
    .then((data) => {
        return data
    });

    // recolectar mi informacion
    console.log(respuesta);

    var usuario = '';
    var password = '';

    usuario = respuesta[0];
    password = respuesta[0];

    //verificar si la informacion
    console.log(respuesta[0]);

    // para guardar informacion
    localStorage.setItem('nombre',usuario);

    // ENVIARME A OTRA PAGINA
    location.href = "home.html";

});


// // funcion para js
// btn.addEventListener('click',async function saludar2(){

//     let url = 'http://localhost:4000/suma';

//     var text1 = document.getElementById('numero1').value;
//     var text2 = document.getElementById('numero2').value;
//     console.log('hola desde un boton');
//     console.log(text1);
//     console.log(text2);

//     // primer paso creqr un json con la infrmacion que necesite mi backend
//     var data = {
//         dato1: text1,
//         dato2: text2
//     }

//     // hacer la consulta a mi api con la informacion
//     const respuesta = await fetch(url,{
//         method: 'POST', // or 'PUT'
//         body: JSON.stringify(data), // data can be `string` or {object}!
//         headers:{
//         'Content-Type': 'application/json'
//         }
//     })
//     .then((res)=> res.json())
//     .then((data) => {
//         return data
//     })

//     // recolectar mi informacion
//     console.log(respuesta);
//     var titulo = respuesta.titulo;
//     var resultado = respuesta.resultado;


//     // manipular mir informacion para mostrasela a mi usuario
//     var panelRespuesta = document.getElementById('resultado');
//     panelRespuesta.innerHTML = `<h2> ${resultado} <h2>`;


// })
