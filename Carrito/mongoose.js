const mongoose = require('mongoose');
var assert = require('assert');
const { async } = require('rxjs');
const frutaM = require('../models/Fruta');
var url = 'mongodb+srv://Prueba:Prueba@cluster0.pby5a.mongodb.net/test'


// definimos el schema
var schema = mongoose.Schema({
    cod: Number,
    Nombre: String,
    Stock: Number
});
//conexion e inserccion de los documentos
function main() {
    mongoose.connect(url, function(err, db) {
        assert.equal(err, null);

        //Esto es para instanciar la db
        var db = mongoose.connection

        insertDocuments(db, function() {
            if (err) throw err;

            db.close();
        });


    });
}


//funcion a la que hay que llamar para añadir el producto comprobando si el stock es 0 o no
//NO FUNCIONA
/*
   function añadir(Producto) {
    //abrir conexion y buscar el producto
       const a = mongoose.connect(url, async(err, db) => {
        assert.equal(err, null);
        var db = mongoose.connection
        const cosa = await frutaM.find({
            Nombre: Producto
        });
       
        //console.log(cosa); //<----esto devuelve lo que toca ya
        //console.log(cosa.map(cosa => cosa.Stock).sort());
        if(cosa.map(cosa => cosa.Stock).sort() != 0){
           console.log("true");
           ret=true;
        }
        else{
            console.log("false");
            ret=false;
        }
        db.close();
        return ret;
    });
    console.log(a);

}
*/

//funcion para insertar los documentos 
var insertDocuments = function(db, callback) {

    var collection = db.collection('Fruta');
    // crear la coleccion, solo deberia hacerse una vez o borrarse 
    collection.insertMany([
        { cod: 1, Nombre: 'Manzana', Stock: 0 },
        { cod: 2, Nombre: 'Platano', Stock: 1 },
        { cod: 3, Nombre: 'Pera', Stock: 2 }
    ], function(err, result) {
        if (err) return console.log("Error en la insercion");
        return callback(result);
    });
}



module.exports = { añadir, main };