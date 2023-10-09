const express = require('express');
const app = express();

//Definimos nuestro motor de plantillas 
app.set('view engine', 'ejs'); //ver a detalle  //El objeto Set le permite almacenar valores únicos de cualquier tipo, incluidos valores primitivos o referencias a objetos

//Cuando quiero recibir datos a través de un formulario
app.use(express.urlencoded({extended: false}));
//Extended false utiliza la librería querystring mientras que true la librería qs. La sintaxis de extended:true permite el uso de otras características como rich objects y arreglos codificados dentro del formato URL-encoded.


app.use('/', require('./router'));

//Para saber si esta corriendo el servidor hacemos lo de abajo.
app.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:5000');
});

