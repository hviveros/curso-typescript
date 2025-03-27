// Tipo Genérico, puede ser cualquier tipo de dato
function identity(arg) {
    return arg;
}
// Uso de la función genérica, se especifica el tipo de dato
var salida1 = identity("Hola");
console.log("Salida 1 " + salida1);
var salida2 = identity(100);
console.log("Salida 2 ", salida2);
// Tipo Genérico en Clases
var Caja = /** @class */ (function () {
    function Caja(contenido) {
        this.contenido = contenido;
    }
    Caja.prototype.obtenerContenido = function () {
        return this.contenido;
    };
    return Caja;
}());
var cajaString = new Caja("Libros");
console.log("Caja String: " + cajaString.obtenerContenido());
var cajaBoolean = new Caja(true);
console.log("Caja Boolean: " + cajaBoolean.obtenerContenido());
var impresora1 = { resultado: 100 };
console.log("Impresora 1: " + impresora1.resultado);
