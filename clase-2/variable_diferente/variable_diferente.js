var variableAny;
//variableAny = "Hello";
variableAny = 10;
// variableAny = true;
console.log("Valor de variable any: ".concat(variableAny));
var variableDesconocida;
// variableDesconocida = "Hello";
variableDesconocida = 10;
// variableDesconocida = true;
if (typeof variableDesconocida === 'number') {
    console.log("Valor de variable desconocida: ".concat(variableDesconocida));
}
// Comentamos para que no genere error y siga ejecutando
// // tipo de función never
// function lanzarError(mensaje: string): never {
//     // trow lanza una excepción
//     throw new Error(mensaje);
// }
// lanzarError('Error en la aplicación');
// tipo de función void
function mensajeLog(mensaje) {
    console.log("Mensaje: ".concat(mensaje));
}
mensajeLog(4);
