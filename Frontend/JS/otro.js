
var contenedor = document.getElementById('titulo');


var usuario = localStorage.getItem('nombre');
contenedor.innerHTML = `<h2> ${usuario} <h2>`;



