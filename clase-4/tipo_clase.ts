export class Persona {
    public nombre: string; // acceso público
    protected edad: number; // accesible desde la clase y sus subclases
    private esDesarrollador: boolean; // accesible solo desde la clase

    constructor(nombre: string, edad: number, esDesarrollador: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }

    public saludar():string { // método público
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }

    protected obtenerEdad():number { // método protegido
        return this.edad;
    }

    private esDev():boolean { // método privado
        return this.esDesarrollador;
    }

}