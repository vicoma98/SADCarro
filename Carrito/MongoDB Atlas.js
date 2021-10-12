const mongoose = require('mongoose');
var assert = require('assert');
var url='mongodb+srv://Prueba:Prueba@cluster0.pby5a.mongodb.net/test'


// definimos el schema
var schema = mongoose.Schema({  
	cod: Number,  
	Nombre: String,  
	Stock: Number
});
//la conexion, aqui dentro hay que meter todo lo que queramos antes de cerrar, las llamadas a las funciones tambien
mongoose.connect(url,function (err,db) {
	assert.equal(err,null);
	console.log('conectado');

	//Esto es para instanciar la db
	var db = mongoose.connection

	//definimos el modelo con el schema y me lo quedo en Fruta
	var Fruta = db.model("Fruta", schema);

	insertDocuments(db,function() {
		if (err) throw err;
		console.log('Insertar documentos');
		db.close();
	});

	
});
//final de la conexion

//funcion a la que hay que llamar para añadir el producto comprobando si el stock es 0 o no
function añadir(Producto){
	//abrir conexion y buscar el producto
	mongoose.connect(url,function(err,db){
		assert.equal(err,null);
		var db = mongoose.connection
		var collection = db.collection('Fruta');

		buscar(db,Producto,function() {
			if(err) {
				throw err;
			}
			console.log(Response)
			
		});
		db.close();
	})
	
}


var insertDocuments = function(db, callback) {
	
	var collection = db.collection('Fruta');
	// crear la coleccion, solo deberia hacerse una vez o borrarse 
	collection.insertMany([
	{cod : 1,Nombre:'Manzana',Stock:0}, 
	{cod : 2,Nombre:'Platano',Stock:1}, 
	{cod : 3,Nombre:'Pera',Stock:2}
  	], function(err,result) {
	if (err) return console.log("Error en la insercion");
	return callback(result);
  });
  }


//este es el buscador 
var buscar = function(db,fruta,callback,){
	var collection = db.collection('Fruta');
	collection.find({ 
		Nombre: fruta }, //aqui hay que introducir el nombre de la variable 
		function(err, result) {
		if (err) return console.log("No existe esa fruta");
		else{
		//en vez de consol.log hay que devolver esa fruta para conocer su stock
		console.log("La fruta existe")
		return callback(result);
		}
		
	});
}
module.exports={añadir};
