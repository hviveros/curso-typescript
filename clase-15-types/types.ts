type PersonaType = {
  nombre: string;
  edad: number;
};

type Parcial<T> = {
  [K in keyof T]?: T[K];
};

// Se puede usar el tipo Parcial para crear un nuevo tipo que tenga todas las propiedades de PersonaType como opcionales
type PersonaParcial = Parcial<PersonaType>;

type SoloLectura<T> = {
  readonly [K in keyof T]: T[K];
};

// Se puede usar el tipo SoloLectura para crear un nuevo tipo que tenga todas las propiedades de PersonaType como solo lectura
type PersonaSoloLectura = SoloLectura<PersonaType>;


let personasolol : PersonaSoloLectura = {
  nombre: 'Juan',
  edad: 30
}
console.log(personasolol.nombre); // Juan


// Template literal types
type Variantes = "pequeno" | "mediano" | "grande";
type ClaseCSS = `boton-${Variantes}`;

// let botonPequeno: ClaseCSS = "boton-pequeno";
// let botonMediano: ClaseCSS = "boton-mediano";
// let botonGrande: ClaseCSS = "boton-grande";


// Conditional types
// Operador terciario
type EsNumero<T> = T extends number ? true : false;

function esNumerico<T>(valor: T): EsNumero<T> {
    return (typeof valor === 'number') as EsNumero<T>;
}
const resultadoN = esNumerico(42); // true
const resultadoS = esNumerico("Hola"); // false

console.log(resultadoN, resultadoS);