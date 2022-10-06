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
app.use(cors())




// logica de su programa
// get
app.get('/' , (req, res) => {

    // aca dentro
    console.log('hola mundo');

});


//post
// app.post('/' , (req, res) => {
    
// });







// correr mi aplicacion en el puerto definido
// funciones en español o arrwfuncion
app.listen(app.get('port'),()=>{
    console.log('Servidor iniciado en el puerto: '+app.get('port'));
});




// comando utilizados
// npm install express
// npm install morgan
// npm install nodemon -D
// npm install cors