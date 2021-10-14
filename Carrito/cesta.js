//const { añadir } = require("./MongoDB Atlas");

let DB = require('./MongoDB Atlas');
class Carrito {
    constructor() {
        this.carrito = [];
    }

    newcarrito() {
        this.carrito = [];
        return carrito;
    }


     async addProducto(evento) {
        //comprobar mongodb
        //console.log(evento);
        const bol = await DB.añadir(evento);
        console.log("el valor de bol es: "+bol);
        if(bol){
            this.carrito.push(evento);
            console.log("Fruta añadida a la cesta");
        }
        else{
            console.log("No hay stock de este producto");
        }
        
        
    }

    removeProducto(evento) {
       //falta comprobar que existe ese producto dentro de la lista
        const idex = this.carrito.indexOf(evento);
        this.carrito.splice(idex, 1);
    }

    tostring() {
        console.log("Tu cesta actual es: "+this.carrito);
        return this.carrito;
    }

}
module.exports.Carrito = Carrito;