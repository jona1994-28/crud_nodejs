const mysql = require('mysql');

const conexion = mysql.createConnection({       //creo la conexion a la base de datos 
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs_db'
});

conexion.connect((error)=>{     //pruebo en el caso de que haya un error
    if(error){
        console.error('El error de conexión es: ' + error.message);
        return;
    }
    console.log('Conectado a la BD MySQL');
})

module.exports = conexion;