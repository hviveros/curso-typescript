var nombre = 'Humberto Luis Viveros Rios';
console.log(nombre.length);
// Mejorando funciones, dar capacidades mayores a las funciones
function obtenerLongitud(obj) {
    var longitud = obj.length;
    var tipo = typeof obj;
    console.log("El tipo de dato es: ".concat(tipo, " y la longitud es: ").concat(longitud));
    return obj.length;
}
console.log(obtenerLongitud('Hola mundo'));
console.log(obtenerLongitud([1, 2, 3, 4, 5, 6, 7]));
// Error, porque un número no tiene la propiedad length
// console.log(obtenerLongitud(40));
// Otro ejemplo
// coleccion es el parámetro
function analizarColeccion(coleccion) {
    var longitud = coleccion.length;
    var tipo = typeof coleccion;
    var esVacio = longitud === 0;
    return {
        longitud: longitud,
        tipo: tipo,
        esVacio: esVacio,
        texto: "Colecci\u00F3n de tipo ".concat(tipo, " con ").concat(longitud, " elementos. ").concat(esVacio ? 'Está vacía.' : 'No está vacía.')
    };
}
console.log(analizarColeccion([1, 2, 3, 4, 5, 6, 7]));
