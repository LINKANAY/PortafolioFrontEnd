export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    sobreMi: String;
    titulo: String;    
    foto: String;

    constructor(nombre: String,apellido: String, sobreMi: String, titulo: String, foto: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.sobreMi = sobreMi; 
        this.titulo = titulo;
        this.foto = foto;
    }
}