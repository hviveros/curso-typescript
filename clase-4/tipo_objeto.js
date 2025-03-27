"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tipo_clase_1 = require("./tipo_clase");
// Instanciar la clase
var persona1 = new tipo_clase_1.Persona('H', 34, true);
// Llamo al método saludar al objeto persona1
console.log(persona1.obtenerEdad()); // 34
