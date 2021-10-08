const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

cesta = [];

console.log("Bienvenido\nDisponemos de estos 3 articulos\n1-Palos\n2-hierros\n3-muelles\n");

rl.question("¿Cual quieres introducir a la cesta?(introduce el nombre)\n", (answer) => {

    addProducto(answer);
    rl.setPrompt("¿Cual quieres introducir a la cesta?(introduce el nombre)\n");
    rl.prompt();
});
rl.on('line', (input) => {
    if (input.trim() === 'salir' || input.trim() == 'exit') {
        tostring();
        process.exit();
    }
    addProducto(input);
    rl.setPrompt("¿Cual quieres introducir a la cesta?(introduce el nombre)\n");
    rl.prompt();
});

function addProducto(evento) {
    cesta.push(evento);
}

function remevoProducto(evento) {

}

function tostring() {
    //console.log(`Tu cesta es ${answer}`);
    console.log(cesta);
}