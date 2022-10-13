// libreria express
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');




// crear mi app o mi API
const app = express();


// poner mi aplicion en un puerto de mi computadora
app.set('port',4000);


//usando librerias en mi aplicacion
app.use(morgan('dev')); // para poder visualizar los estados de nuestro servidor
app.use(express.json()); // para poder manjar los json
app.use(cors());



// ENDPOINTS

// logica de su programa
// get
// req -> recibe informacion , res -> envia informacion
app.get('/' , (req, res) => {

    // aca dentro
    res.send('<h1>HOLA DESDE EL BACKEND</h1>');
});


app.get('/videos' , (req, res) => {

    var ejemplo = {
        "videos": "como instalar python",
        "url": "www.youtube.com"
    }
    // aca dentro
    res.send(ejemplo);
});


//post
app.post('/login' , (req, res) => {

    var dbUsuarios = require('./usuarios.json');

    var usuarioEnviado = req.body.usuario;
    var passwordEnviado = req.body.password;

    var arregloRepuesta = [];

    // BUSCAR LO QUE YO QUIERO
    for (var i = 0; i < dbUsuarios.length; i++) {
        if(dbUsuarios[i].Usuario == usuarioEnviado && dbUsuarios[i].Password == passwordEnviado){            
            arregloRepuesta.push(dbUsuarios[i]);
        } 
    }


    // ESE ES EL IF PARA RESPONDERLE AL FRONTEND
    if (arregloRepuesta.length > 0) {
        res.send(arregloRepuesta);
    } else {
        res.send({Error: "Tu usuario no existe"});
    }
    
});



//post para buscar jugadores por seleccion
app.post('/buscador' , (req, res) => {


    var nombreSelecion = req.body.Pais;

    var dbJugadores = require('./jugadores.json');

    var arregloRepuesta = [];

    // BUSCAR LO QUE YO QUIERO
    for (var i = 0; i < dbJugadores.length; i++) {
        if(dbJugadores[i].Pais == nombreSelecion){
            arregloRepuesta.push(dbJugadores[i]);
        }
    }

    // ESE ES EL IF PARA RESPONDERLE AL FRONTEND
    if (arregloRepuesta.length > 0) {
        res.send(arregloRepuesta);
    } else {
        res.send({Error: "No existen stickers de esta seleccion"});
    }
});



// correr mi aplicacion en el puerto definido
// funciones en español o arrwfuncion
app.listen(app.get('port'),()=>{
    console.log('Servidor iniciado en el puerto: '+app.get('port'));
});


// comando para arrancar el backend con la libreria nodemon
// npm run dev

// comando utilizados
// npm install express
// npm install morgan
// npm install nodemon -D
// npm install cors