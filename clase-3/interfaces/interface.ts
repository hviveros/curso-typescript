interface Persona {
  nombre: string;
  edad: number;
  esDesarrollador: boolean;
}

let persona1: Persona = {
  nombre: 'H',
  edad: 34,
  esDesarrollador: true
};

// console.log(`Persona: ${persona1.nombre}`);
console.log("Persona: ", persona1);

let personas: Persona[] = [
    { nombre: 'H', edad: 34, esDesarrollador: true },
    { nombre: 'M', edad: 30, esDesarrollador: false },
    { nombre: 'C', edad: 25, esDesarrollador: true }
];
console.log("Personas: ", personas);

// Definir interfaces con funciones
// Aquí no se difinieron acciones, solo se definen las firmas de las funciones
interface Sumar {
  (a: number, b: number): number;
}
// Aquí definimos una función que cumple con la firma de la interfaz
let sumar: Sumar = (a: number, b: number) => {
    return a + b
};
console.log("Resultado de sumar: ", sumar(2, 3));