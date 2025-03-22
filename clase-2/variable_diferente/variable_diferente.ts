let variableAny: any;
//variableAny = "Hello";
variableAny = 10;
// variableAny = true;

console.log(`Valor de variable any: ${variableAny}`);

let variableDesconocida: unknown;
// variableDesconocida = "Hello";
variableDesconocida = 10;
// variableDesconocida = true;

if (typeof variableDesconocida === 'number') {
  console.log(`Valor de variable desconocida: ${variableDesconocida}`);
}

// Comentamos para que no genere error y siga ejecutando
// // tipo de función never
// function lanzarError(mensaje: string): never {
//     // trow lanza una excepción
//     throw new Error(mensaje);
// }
// lanzarError('Error en la aplicación');

// tipo de función void
function mensajeLog(mensaje: string): void {
    console.log(`Mensaje: ${mensaje}`);
}
mensajeLog('Este es un mensaje de log'); 