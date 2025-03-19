const prompt = require('prompt-sync')();

const lista = [];

const alumnos = prompt("Cuantas personas deseas agregar?: ");

for (let i = 0; i < alumnos; i++) {
    const nombre = prompt("Ingresa el nombre de la persona: ");
    const edad = prompt("Ingresa la edad de la persona: ");
    const nota = prompt("Ingresa la nota: ");

    const alumno = [nombre, edad, nota];
    lista.push(alumno);
};

console.log('Datos ingresados: ', lista);

lista.sort((a, b) => b[2] - a[2]);
console.log('Ordenados por nota: ', lista);