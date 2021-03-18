export interface FormAdulto{
    // simbolo ? significa que el dato no es requerido 
    id_adulto_mayor?: number;
    nombre?: string;
    apellidos?:string;
    cedula?:number;
    fecha_nacimiento?:Date;
    Fecha_expedicion?:Date;
    Motivo?:string;
    celular?:number;
    nom_cajera?:string;
    punto_venta?:string;
    ced_cajera?:number;
    id_foto1?:number;
}
