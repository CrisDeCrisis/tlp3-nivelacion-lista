const prompt = require('prompt-sync')();

const lista = [];

const personas = prompt("Cuantas personas deseas agregar?: ");

for (let i = 0; i < personas; i++) {
    const nombre = prompt("Ingresa el nombre de la persona: ");
    const edad = prompt("Ingresa la edad de la persona: ");
    const genero = prompt("Ingresa el genero de la persona: ");

    const persona = [nombre, edad, genero];
    lista.push(persona);
};

console.log(lista);