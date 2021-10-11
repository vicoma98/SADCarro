class Carrito {
    constructor() {
        this.carrito = [];
    }

    newcarrito() {
        this.carrito = [];
        return carrito;
    }


    addProducto(evento) {
        //comprobar mongodb
        this.carrito.push(evento);
    }

    removeProducto(evento) {
        const idex = this.carrito.indexOf(evento);
        this.carrito.splice(idex, 1);
    }

    tostring() {
        //console.log(`Tu cesta es ${answer}`);
        console.log(this.carrito);
        return this.carrito;
    }
}

module.exports.Carrito = Carrito;