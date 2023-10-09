const conexion = require('../database/db');

exports.save = (req, res) => {  //save metodo para guardar
    //capturamos el texto de los campos de texto
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('INSERT INTO users SET ?', {user: user, rol: rol}, (error,results) => {
        if(error){
            console.log(error);
        } else {
            res.redirect('/');  // Cuando un navegador web intenta abrir una URL que ha sido redirigida, se abre una página con una URL diferente
        }
    });
}

exports.update = (req, res) => {
    const id = req.params.id;
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('UPDATE users SET ? WHERE id = ?', [{user:user, rol:rol}, id], (error, results) => {
        if(error){
            console.log(error);
        } else {
            res.redirect('/');  // Cuando un navegador web intenta abrir una URL que ha sido redirigida, se abre una página con una URL diferente
        }
    }); 
};


 


