//import mongoose from 'mongoose';
const mongoose = require('mongoose');


var url='mongodb+srv://Prueba:Prueba@cluster0.pr5n4.mongodb.net/test'



mongoose.connect(url,function (err,db) {
    assert.equal(err,null);
    console.log('conectado');

   /*db.createCollection("documents", function(err, res) {
       if (err) throw err;
       console.log("Collection created!");
     });*/
 //llamar al creador de colecciones
 /*  
   insertDocuments(db,function() {
       if (err) throw err;
       console.log('success with insertion!');
       db.close();
   });
   */
   

});
