const express = require('express');
const router = express.Router();

const conexion = require('./database/db');
router.get('/', (req, res) => {
    /* res.render('index'); */
    conexion.query('SELECT * FROM users',(error,results)=>{
        if  (error){
            throw error;
        }else{
            res.render('index', {results: results}); //los results se guardan en la variable results
        }
    });
});

//Ruta para crear registros
router.get('/create', (req, res) => {
    res.render('create');
})

//Ruta para editar registros
router.get('/edit/:id', (req, res) => {     //:id es un parametro
    const id = req.params.id;   //req.params sería para obtener información de un elemento de un catálogo de colecciones
    const user = req.params.user; 
   /*  conexion.query('SELECT * FROM users WHERE '); */
    conexion.query('SELECT * FROM users WHERE id=?',[id], (error, results)=>{
        if  (error){
            throw error;
        }else{
            res.render('edit', {user:results[0]}); //en user se va a guardar el resultado de la consulta
        }
    })
})

//Ruta para eliminar el registro
router.get('/delete/:id', (req,res)=>{
    const id = req.params.id; 
    conexion.query('DELETE FROM users WHERE id=?', [id], (error, results)=>{
        if  (error){
            throw error;
        }else{
            res.redirect('/');
        }
    }) 
});

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);
//PARA PODER EXPORTAR NUESTRO ARCHIVO
module.exports = router;