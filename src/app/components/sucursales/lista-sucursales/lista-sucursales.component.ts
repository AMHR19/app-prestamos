import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../../../models/sucursal';
import { SucursalesService } from '../../../services/sucursales.service';
import { SucursalDetalles } from '../../../models/sucursal-detalles';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { ToastrService } from '../../../../../node_modules/ngx-toastr';
import { RedesSocialesService } from '../../../services/redes-sociales.service';
import { RedSocial } from '../../../models/red-social';
import { EmpleadosService } from '../../../services/empleados.service';
import { Empleado } from '../../../models/empleado';

@Component({
  selector: 'app-lista-sucursales',
  templateUrl: './lista-sucursales.component.html',
  styleUrls: ['./lista-sucursales.component.css'],
  providers: [SucursalesService,RedesSocialesService,EmpleadosService]
})
export class ListaSucursalesComponent implements OnInit {
  //resultado de peticion getSucursales();
  public result:any;
  //lista de sucursales y redes sociales
  public sucursales:Array<SucursalDetalles>;
  public redesSociales:Array<RedSocial>;
  //sucursal y redes sociales seleccionada para editar o ver
  public sucursalSeleccionada:SucursalDetalles;
  public redesSeleccionada:Array<RedSocial>;
  //para añadir una red a una sucursal
  public nuevaRed:RedSocial;
  //para llenar el select de empleados
  public empleado:Array<any>;
  //variables para la paginacion:
  public pag:number; //numero de la pagina en que se encuentra
  public numRow:number;//numero de rows
  public numPag:number; //numero de paginas
  public arrayPag:Array<number>; //array que guardara el numero de paginas
  //Para llenar select:
  public empleados:Array<any>;
  constructor(
    private _SucursalesService:SucursalesService,
    private _RedesSocialesService:RedesSocialesService,
    private _EmpleadosService:EmpleadosService,
    private toastr:ToastrService
  ) { 
    this.arrayPag=[];
    this.pag=1;
    this.sucursalSeleccionada=new SucursalDetalles(0,'','','','','','','','','','','','','','',);
    this.nuevaRed=new RedSocial(0,0,'','');
    this.redesSeleccionada=[];
    this.empleados=[];
  }
  ngOnInit(){
    this.getSucursales();
    this.validarSucursales();
  }
  getSucursales(){
    this._SucursalesService.getSucursalesDetalles().subscribe(result=>{
      if(result['result']){
        this.result = result;
        this.toastr.info('Lista actualizada','Info',{timeOut:1000});
        this.calcularPaginacion();
        this.validarSucursales();
        this.getRedes();
        this.getEmpleados();
      }else{
        alert('Faltal!!, fallo al cargar las sucursales');
      }
    });
  }
  getRedes(){
    this._RedesSocialesService.getRedes().subscribe(result=>{
      if(result['result']){
        this.redesSociales = <Array<RedSocial>>result['result'];
        console.log(this.redesSociales);
      }else{
        alert('Faltal!!, fallo al cargar las sucursales');
      }
    });
  }
  updateSucursal(){
    this._SucursalesService.updateSucursal(this.sucursalSeleccionada).subscribe(result=>{
      if(result['result']){
        this.sucursalSeleccionada=new SucursalDetalles(0,'','','','','','','','','','','','','','',);
        this.result = result;
        this.toastr.success('Datos de empresa actualizados','Exito',{closeButton:true});
        this.getSucursales();
      }else{
        this.sucursalSeleccionada=new SucursalDetalles(0,'','','','','','','','','','','','','','',);
        alert('Faltal!!, fallo al cargar las empresas');
      }
    });
  }
  addRed(){
    console.log(this.nuevaRed);
    this._RedesSocialesService.addRed(this.nuevaRed).subscribe(result=>{
      if(result['result']){
        this.toastr.success('Nueva red social agregada','Exito',{closeButton:true});
      }else{
        alert('Faltal!!, fallo al agregar red social');
        console.log(result['result']);
      }
    })
  }
  asignarEncargado(){
    this._SucursalesService.setEncargado(this.sucursalSeleccionada).subscribe(result=>{
      if(result['result']){
        this.toastr.success('Encargado asignado','Exito',{closeButton:true});
        this.getSucursales();
      }else{
        alert('Faltal!!, fallo al asignar encargado');
        console.log(result['result']);
      }
    })
  }
  seleccionar(sucursal:SucursalDetalles){
    this.redesSeleccionada=[];
    for(let i=0; i<this.redesSociales.length; i++){
      if(this.redesSociales[i].idsucursal == sucursal.idsucursal){
        this.redesSeleccionada.push(this.redesSociales[i]);
      }
    }
    this.nuevaRed.idsucursal=sucursal.idsucursal;
    this.sucursalSeleccionada=sucursal;
    console.log(this.sucursalSeleccionada);
  }
  limpiarForm(form:NgForm){
    form.reset();
    this.sucursalSeleccionada=new SucursalDetalles(0,'','','','','','','','','','','','','','',);
    this.nuevaRed=new RedSocial(0,0,'','');
  }
  validarSucursales(){
    var s:Array<any>=[];
    s=this.sucursales;
    //validar que tenga encargado asignado:
    for(let i=0; i < s.length; i++){
      if(!s[i].idencargado || s[i].idencargado==null || s[i].idencargado==''){
        this.toastr.warning('Sucursal sin encargado','Alerta',{disableTimeOut:true, closeButton:true});
      }
    }
  }
  getEmpleados(){
    this._EmpleadosService.getEmpleados().subscribe(result=>{
      if(result['result']){
        var x = result['result'];
        console.log(x);
        for(let i=0; i < x.length ; i++){
          if(x[i].puesto == 'SUPERVISOR'){
            this.empleados.push(x[i]);
          }
        } 
        console.log(this.empleados);
      }else{
        alert('Faltal!!, fallo al cargar las sucursales');
      }
    });
    
  }
  // CALCULAR PAGINACION
  public calcularPaginacion(){
    console.log('Calculando paginacion:');
    this.numRow = this.result.result.length;
    console.log(`rows:${this.numRow}`)
    this.numPag = this.numRow/10;
    if(!Number.isInteger(this.numPag)){
        this.numPag=Math.trunc(this.numPag);
        this.numPag += 1;
    }
    console.log(`El numero de paginas sera: ${this.numPag}`);
    for(let i=0; i < this.numPag; i++){
        this.arrayPag[i]=i+1;
    }
    console.log(`El arreglo con las paginas es: `,this.arrayPag);
    this.cambiarPagina(this.pag);
}
// CONTROLAR PAGINACION
public cambiarPagina(pag){
    console.log('Recalculando paginacion:');
    this.sucursales=[];
    this.pag = pag;
    var calculo1 = this.pag * 10;
    console.log(`El calculo1 es ${calculo1}`)
    var resta = 0;
    if(calculo1 > this.numRow){
        var resta = calculo1 - this.numRow;
        console.log(`pag*10 se exede del numero de rows por: ${resta}`);
    }
    var x = calculo1-resta;
    var index = this.pag-1;
    var limite = ((this.numRow < 10) ?this.numRow :10);
    for(let i=0; i < limite ; i++ ){ //ciclo para iterar peticion
        this.sucursales[i]=this.result.result[index];
        index++;
    }
    console.log(this.sucursales);
}

}
