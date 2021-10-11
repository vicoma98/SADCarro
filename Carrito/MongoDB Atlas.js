//import mongoose from 'mongoose';
const mongoose = require('mongoose');


var url='mongodb+srv://Prueba:Prueba@cluster0.pr5n4.mongodb.net/test'


//con esto conecta bien pero se queda esperando algo
async function conexion(){
	try {
		await mongoose.connect(url)
	} catch(err) {
		console.log(err);
	}
    console.log('conectado');
} 

exports.conexion();

