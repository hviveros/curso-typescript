// Parámetros opcionales
function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre);
    }
    else {
        return "Hola, ".concat(nombre);
    }
}
// Sí solo se pasa un argumento, se ejecuta el else, sin dar error
console.log(saludar("H", "Buenos días"));
// Parámetros múltiples
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    // reduce() es un método que recorre un array y va acumulando los valores
    // en vez de un for o forEach
    return numeros.reduce(function (a, b) { return a + b; });
}
console.log("La suma de todos los elementos es: ", sumarTodos(1, 2, 3, 4, 5));
// Parámetros o valores por defecto
function despedida(nombre, mensaje) {
    if (mensaje === void 0) { mensaje = "Adiós"; }
    return "".concat(mensaje, ", ").concat(nombre);
}
console.log(despedida("H"));
console.log(despedida("H", "Hasta luego"));
// Sobrecarga de funciones
function combinar(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b; // Concatenación
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b; // Suma numérica
    }
    throw new Error("Tipos incompatibles");
}
console.log(combinar("Hola", " Mundo")); // "Hola Mundo"
console.log(combinar(10, 20)); // 30
