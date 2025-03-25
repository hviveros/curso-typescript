// Propiedades opcionales
interface Direccion {
    calle: string;
    numero: number;
    ciudad?: string; // Propiedad opcional
}
let direccion1: Direccion = {
    calle: "Calle Falsa",
    numero: 123
};
let direccion2: Direccion = {
    calle: "Calle Falsa",
    numero: 123,
    ciudad: "Springfield"
};
console.log(direccion1);
console.log(direccion2);

// Propieades de solo lectura (readonly)
interface PersonaReadOnly {
    readonly nombre: string;
    readonly edad: number;
    readonly esDesarrollador: boolean;
}
let personaRO: PersonaReadOnly = {
    nombre: "H",
    edad: 30,
    esDesarrollador: true
};
console.log(personaRO);
// personaRO.nombre = "Juan"; // Error: Cannot assign to 'nombre

// Extender interfaces
interface Empleado extends PersonaReadOnly {
    puesto: string;
}

let Empleado1: Empleado = {
    nombre: "H",
    edad: 30,
    esDesarrollador: true,
    puesto: "Fullstack Developer"
};
console.log(Empleado1);