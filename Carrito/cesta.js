const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Bienvenido\nDisponemos de estos 3 articulos\n1-Palos\n2-hierros\n3-muelles\n");
  
rl.question("¿Cual quieres introducir a la cesta?(introduce el nombre)\n", function (answer) {
console.log(`Tu cesta es ${answer}`);
rl.close();
});


function addProducto(evento) {


}

function remevoProducto(evento) {

}

function tostring() {

}
