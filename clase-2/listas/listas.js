var nombres = ['Juan', 'Pedro', 'Luis'];
console.log("Nombres: ".concat(nombres));
var edades = [20, 30, 40];
console.log("Edades: ".concat(edades));
var mixto = ['H', 20, true];
console.log("Mixto: ", mixto);
var personas = [
    { nombre: 'Juan', edad: 20, esDesarrollador: true },
    { nombre: 'Pedro', edad: 30, esDesarrollador: false },
    { nombre: 'Luis', edad: 40, esDesarrollador: true }
];
personas.push({ nombre: 'María', edad: 50, esDesarrollador: false });
console.log("Personas: ", personas);
//Tupla
var personaTupla1;
personaTupla1 = ['Juan', 20, true];
// console.log("Personas Tupla 1: ", personaTupla1);
var personaTupla2 = [];
personaTupla2.push(['Juan', 20, true]);
personaTupla2.push(['Pedro', 30, false]);
personaTupla2.push(['Luis', 40, true]);
personaTupla2.forEach(function (personaTupla1) {
    console.log("Persona Tupla 1: ", personaTupla1);
    var nombre = personaTupla1[0];
    var edad = personaTupla1[1];
    var esDesarrollador = personaTupla1[2];
    console.log("Nombre", nombre);
    console.log("Edad", edad);
    console.log("Es desarrollador", esDesarrollador);
});
// Enumeradores
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
    DiaSemana[DiaSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    DiaSemana[DiaSemana["Domingo"] = 6] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
var dia = DiaSemana.Domingo;
console.log(dia);
console.log("Día: ", DiaSemana[dia]);
