import { Empleado } from './empleado';

let empleado = new Empleado('Juan', 30, true, 'Desarrollador Senior');

console.log(empleado.obtenerInfo());
console.log(empleado.saludar());

console.log("Nombre: ", empleado.nombre);