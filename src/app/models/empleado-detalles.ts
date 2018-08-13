export class EmpleadoDetalles {
    constructor(
        public idempleado:number,
        public idsucursal:number,//id de la sucursal
        public fecha_alta:string,
        public nombres:string,
        public app_pat:string,
        public app_mat:string,
        public callenum:string,
        public colonia:string,
        public estado:string,
        public municipio:string,
        public poblacion:string,
        public telefonos:string,
        public nss:string,
        public puesto:string,//aqui va el id del puesto
        public derecho_esp:number,//derechos de vender en otras todas las empresas
        public status:string,//puede ser 1 o 0
        public sucursal_nombre:string
    ){}
}
