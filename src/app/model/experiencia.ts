export class Experiencia {
    id? : number;
    nombre : String;
    cargo : String;
    fechaInicio : Date;
    fechaFin : Date;
    tareas : Array<String>;
    logo : string;

    constructor(nombre : String, cargo : String, fechaInicio : Date, fechaFin : Date, tareas : Array<String>, logo : string) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.fechaInicio = fechaInicio;
        this.fechaFin   = fechaFin;
        this.tareas = tareas;
        this.logo = logo;
    }

}
