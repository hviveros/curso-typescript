let nombre: string = 'Humberto Luis Viveros Rios';
console.log(nombre.length);

// Mejorando funciones, dar capacidades mayores a las funciones
function obtenerLongitud<T extends { length: number }>(obj: T): number {
    let longitud : number = obj.length;
    let tipo: string = typeof obj;
    console.log(`El tipo de dato es: ${tipo} y la longitud es: ${longitud}`);
    return obj.length;
}

console.log(obtenerLongitud('Hola mundo'));

console.log(obtenerLongitud([1,2,3,4,5,6,7]));

// Error, porque un número no tiene la propiedad length
// console.log(obtenerLongitud(40));

// Otro ejemplo
// coleccion es el parámetro
function analizarColeccion<T extends { length: number }>(coleccion: T) {
    const longitud = coleccion.length;
    const tipo = typeof coleccion;
    const esVacio = longitud === 0;
    
    return {
      longitud,
      tipo,
      esVacio,
      resumen: `Colección de tipo ${tipo} con ${longitud} elementos. ${esVacio ? 'Está vacía.' : 'No está vacía.'}`
    };
  }

console.log(analizarColeccion([1,2,3,4,5,6,7]));