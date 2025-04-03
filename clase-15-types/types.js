var personasl = {
    nombre: 'Juan',
    edad: 30
};
console.log(personasl.nombre); // Juan
function esNumero(valor) {
    return (typeof valor === 'number');
}
var resultado1 = esNumero(42); // true
var resultado2 = esNumero("Hola"); // false
console.log(resultado1, resultado2);
