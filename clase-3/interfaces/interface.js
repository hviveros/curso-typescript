var persona1 = {
    nombre: 'H',
    edad: 34,
    esDesarrollador: true
};
// console.log(`Persona: ${persona1.nombre}`);
console.log("Persona: ", persona1);
var personas = [
    { nombre: 'H', edad: 34, esDesarrollador: true },
    { nombre: 'M', edad: 30, esDesarrollador: false },
    { nombre: 'C', edad: 25, esDesarrollador: true }
];
console.log("Personas: ", personas);
// Aquí definimos una función que cumple con la firma de la interfaz
var sumar = function (a, b) {
    return a + b;
};
console.log("Resultado de sumar: ", sumar(2, 3));
