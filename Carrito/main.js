const cesta = require('./cesta.js');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main() {

    car = new cesta.Carrito();

    console.log("Bienvenido\nDisponemos de estos 3 articulos\n1-Palos\n2-hierros\n3-muelles\n");

    rl.question("¿Cual quieres introducir a la cesta?(introduce el nombre)\n", (answer) => {
        car.addProducto(answer);
        //coso.Carrito.addProducto(answer);
        rl.setPrompt("¿Cual quieres introducir a la cesta?(introduce el nombre)\n");
        rl.prompt();
    });
    rl.on('line', (input) => {
        if (input.trim() == 'salir' || input.trim() == 'exit') {
            tostring();
            process.exit();
        }
        //coso.Carrito.addProducto(input);
        rl.setPrompt("¿Cual quieres introducir a la cesta?(introduce el nombre)\n");
        rl.prompt();
    });


}
main();