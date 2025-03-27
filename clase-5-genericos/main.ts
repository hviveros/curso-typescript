// Tipo Genérico, puede ser cualquier tipo de dato
function identity<T>(arg: T): T {
    return arg;
}

// Uso de la función genérica, se especifica el tipo de dato
let salida1 = identity<string>("Hola");
console.log("Salida 1 " + salida1);

let salida2 = identity<number>(100);
console.log("Salida 2 ", salida2);

// Tipo Genérico en Clases
class Caja<T> {
    contenido: T;
    
    constructor(contenido: T) {
        this.contenido = contenido;
    }

    public obtenerContenido(): T {
        return this.contenido;
    }
}   

let cajaString = new Caja<string>("Libros");
console.log("Caja String: " + cajaString.obtenerContenido());

let cajaBoolean = new Caja<boolean>(true);
console.log("Caja Boolean: " + cajaBoolean.obtenerContenido());


// Tipo Genérico en Interfaces
interface Imprimir<T> {
    resultado: T;
}

let impresora1: Imprimir<number> = { resultado: 100 };
console.log("Impresora 1: " + impresora1.resultado);