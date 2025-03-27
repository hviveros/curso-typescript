// Función decorador, recibe como parámetro la clase a decorar
// Esta función debe estar antes de la clase que se va a decorar
function PersonaDec(target: Function) {
    // Muestra la clase "objetivo" a decorar
    console.log(target);

    // Se agrega un nuevo método a la clase, se "extiende" la clase
    target.prototype.despedir = function(despedida: string): string {
        return `${despedida}, ${this.nombre}.`;
    }
}

@PersonaDec

class Persona2 {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(saludo: string): string {
        return `${saludo}, soy ${this.nombre}, y tengo ${this.edad} años.`;
    }

    // Indicar a la clase que tiene un decorador
    // que puede o no tener un método despedir, con el signo !
    despedir!: (despedida: string) => string;

}

// Este objeto tiene las propiedades originales necesarias
let usuario = new Persona2('H', 34);

// Implementación de los métodos al objeto
console.log(usuario.saludar('Hola'));
console.log(usuario.despedir('Adiós'));