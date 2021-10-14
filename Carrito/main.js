let modulo = require('./cesta.js');
const readline = require("readline");
const inquirer = require('inquirer');
const { async } = require('rxjs');

//metodo main que genera la interfaz con el menú de opciones
const main = async() => {
    car = new modulo.Carrito();
    let option = '';

    do {
        option = await inqmenu();

        switch (option) {
            case '2':
                const pr = await leerinput('Producto: ');
                await car.addProducto(pr);
                break;
            case '1':
                car.tostring();
                const eliminado = await leerinput('Producto: ');
                car.removeProducto(eliminado);
                break;
            case '3':
                car.tostring();
                break;
        }
        if (option !== '0') { await pause(); }


    } while (option !== '0');



}
//menu de opciones
const menuOp = [{
    type: 'list',
    name: 'option',
    message: '¿que desea hacer?',
    choices: [

        { value: '1', name: "1. eliminar" },
        { value: '2', name: "2. anadir" },
        { value: '3', name: "3. mostrar" },
        { value: '0', name: "0. salir" }
    ]
}];
//funciones del menu para controlar la entrada por consola
const inqmenu = async() => {
    console.clear();

    const { option } = await inquirer.prompt(menuOp);
    return option;
}
const pause = async() => {
    const question = [{
        type: 'input',
        name: 'enter',
        message: ' Presione enter para continuar'
    }];
    console.log('\n');
    await inquirer.prompt(question);
}

const leerinput = async(message) => {
    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Ingrese algun valor';
            }
            return true;
        }
    }];
    const { desc } = await inquirer.prompt(question);
    return desc;

}

main();