const mongoose = require('mongoose');
var assert = require('assert');
var url='mongodb+srv://Prueba:Prueba@cluster0.pby5a.mongodb.net/test'


// definimos el schema
var schema = mongoose.Schema({  
	cod: Number,  
	Nombre: String,  
	Stock: Number
});
//la conexion, aqui dentro hay que meter todo lo que queramos antes de cerrar, las llamasas a las funciones tambien
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
	});

	buscar(db,function() {
		if(err) throw err;
		console.log("buscador");
	});
	
	console.log(Fruta);


	//borrar la coleccion y cerrar
	Fruta.collection.drop();
	//db.close();
});
//final de la conexion


var insertDocuments = function(db, callback) {
	// Get the documents collection
	var collection = db.collection('Fruta');
	// Insert some documents
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
var buscar = function(db,callback){
	var collection = db.collection('Fruta');
	collection.find({ 
		Nombre: /*Aqui tiene que ir la variable nombre*/'Manzana' }, 
		function(err, result) {
		if (err) return console.log("No existe esa fruta");
		else{
		//en vez de consol.log hay que devolver esa fruta para conocer su stock
		console.log("La fruta existe")
		return callback(result);
		}
		
	});
}

