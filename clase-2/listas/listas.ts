let nombres: string[] = ['Juan', 'Pedro', 'Luis'];
console.log(`Nombres: ${nombres}`);

let edades: number[] = [20, 30, 40];
console.log(`Edades: ${edades}`);

let mixto: any[] = ['H', 20, true];
console.log("Mixto: ", mixto);

interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}

let personas: Persona[] = [
    { nombre: 'Juan', edad: 20, esDesarrollador: true },
    { nombre: 'Pedro', edad: 30, esDesarrollador: false },
    { nombre: 'Luis', edad: 40, esDesarrollador: true }
];
personas.push({ nombre: 'María', edad: 50, esDesarrollador: false });
console.log("Personas: ", personas);


//Tupla
let personaTupla1: [string, number, boolean];
personaTupla1 = ['Juan', 20, true];
// console.log("Personas Tupla 1: ", personaTupla1);

let personaTupla2: [string, number, boolean][] = [];
personaTupla2.push(['Juan', 20, true]);
personaTupla2.push(['Pedro', 30, false]);
personaTupla2.push(['Luis', 40, true]);

personaTupla2.forEach(personaTupla1 => {
    console.log("Persona Tupla 1: ", personaTupla1);

    let nombre: string = personaTupla1[0];
    let edad: number = personaTupla1[1];
    let esDesarrollador: boolean = personaTupla1[2];

    console.log("Nombre", nombre);
    console.log("Edad", edad);
    console.log("Es desarrollador", esDesarrollador);
});

// Enumeradores
enum DiaSemana {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo
}

let dia: DiaSemana = DiaSemana.Domingo;
console.log(dia);
console.log("Día: ", DiaSemana[dia]);