// Parámetros opcionales
function saludar(nombre: string, saludo?: string){
    if (saludo) {
        return `${saludo}, ${nombre}`;
    } else {
        return `Hola, ${nombre}`;
    }
}
// Sí solo se pasa un argumento, se ejecuta el else, sin dar error
console.log(saludar("H", "Buenos días"));

// Parámetros múltiples
function sumarTodos(...numeros: number[]): number {
    // reduce() es un método que recorre un array y va acumulando los valores
    // en vez de un for o forEach
    return numeros.reduce((a, b) => a + b);
}
console.log("La suma de todos los elementos es: ", sumarTodos(1, 2, 3, 4, 5));

// Parámetros o valores por defecto
function despedida(nombre: string, mensaje: string = "Adiós") {
    return `${mensaje}, ${nombre}`;
}
console.log(despedida("H"));
console.log(despedida("H", "Hasta luego"));

// Sobrecarga de funciones
function combinar(a: string | number, b: string | number): string | number {
if (typeof a === "string" && typeof b === "string") {
    return a + b; // Concatenación
}
if (typeof a === "number" && typeof b === "number") {
    return a + b; // Suma numérica
}
throw new Error("Tipos incompatibles");
}
console.log(combinar("Hola", " Mundo")); // "Hola Mundo"
console.log(combinar(10, 20));           // 30
  