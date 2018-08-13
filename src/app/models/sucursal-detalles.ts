export class SucursalDetalles {
    constructor(
        public idsucursal: number,
        public idencargado: string,
        public nombre: string,
        public telefono: string,
        public hora_inicio: string,
        public hora_fin: string,
        public callenum: string,
        public colonia: string,
        public poblacion: string,
        public municipio: string,
        public estado: string,
        public cp:string,
        public empleado_nom:string,
        public empleado_ap:string,
        public empleado_am:string
    ){}
}
