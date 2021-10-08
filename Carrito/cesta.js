class Carrito {

    constructor(carrito) {
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

    remevoProducto(evento) {
        sustito = [];
        veces = 0;
        for (const id in this.carrito) {
            if (id === evento && veces == 0) {
                veces += 1;

            } else {
                sustito.push(id);
            }
        }
        if (this.carrito.lenght() == sustito.lenght()) {
            return false;
        } else {
            this.carrito = sustito;
            return true;
        }
    }

    tostring() {
        //console.log(`Tu cesta es ${answer}`);
        //console.log(cesta);
        return this.carrito;
    }
}
//export { Carrito };