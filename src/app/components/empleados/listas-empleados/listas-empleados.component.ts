import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { ToastrService } from '../../../../../node_modules/ngx-toastr';
import { EmpleadosService } from '../../../services/empleados.service';
import { UsuariosService } from '../../../services/usuarios.service';
import { EmpleadoDetalles } from '../../../models/empleado-detalles';
import { Usuario } from '../../../models/usuario';
import { SucursalDetalles } from '../../../models/sucursal-detalles';
import { SucursalesService } from '../../../services/sucursales.service';
import { Sucursal } from '../../../models/sucursal';

@Component({
  selector: 'app-listas-empleados',
  templateUrl: './listas-empleados.component.html',
  styleUrls: ['./listas-empleados.component.css'],
  providers:[EmpleadosService,UsuariosService]
})
export class ListasEmpleadosComponent implements OnInit {
//resultado de peticion getSucursales();
public result:any;
//lista de empleados y redes usuarios
public empleados:Array<EmpleadoDetalles>;
public usuarios:Array<Usuario>;
//sucursal y redes sociales seleccionada para editar o ver
public empleadoSeleccionado:EmpleadoDetalles;
public usuarioSeleccionado:Usuario;
//para llenar el select de sucursales
public sucursales:Array<Sucursal>;
//variables para la paginacion:
public pag:number; //numero de la pagina en que se encuentra
public numRow:number;//numero de rows
public numPag:number; //numero de paginas
public arrayPag:Array<number>; //array que guardara el numero de paginas
//para mostrar y ocultar la contraseña
public mostrar:boolean=false;
constructor(
  private _EmpleadosService:EmpleadosService,
  private _UsuariosService:UsuariosService,
  private _SucursalesService:SucursalesService,
  private toastr:ToastrService
) { 
  this.arrayPag=[];
  this.pag=1;
  this.empleadoSeleccionado=new EmpleadoDetalles(0,0,'','','','','','','','','','','','',0,'','');
  this.usuarioSeleccionado=new Usuario(0,0,'','');

}

ngOnInit(){
  this.getEmpleados();
  this.getSucursales();
}

getEmpleados(){
  this._EmpleadosService.getEmpleadosDetalles().subscribe(result=>{
    if(result['result']){
      this.result = result;
      this.toastr.info('Lista actualizada','Info',{timeOut:1000});
      this.calcularPaginacion();
      this.getUsuarios();
    }else{
      alert('Faltal!!, fallo al cargar las sucursales');
    }
  });
}
getSucursales(){
  this._SucursalesService.getSucursales().subscribe(result=>{
    if(result['result']){
      this.sucursales=<Array<Sucursal>>result['result'];
    }else{

    }
  })
}
getUsuarios(){
  this._UsuariosService.getUsuarios().subscribe(result=>{
    if(result['result']){
      this.usuarios = <Array<Usuario>>result['result'];
      console.log(this.usuarios);
    }else{
      alert('Faltal!!, fallo al cargar las sucursales');
    }
  });
}
updateEmpleado(){
  this._EmpleadosService.updateEmpleado(this.empleadoSeleccionado).subscribe(result=>{
    if(result['result']){
      this.empleadoSeleccionado=new EmpleadoDetalles(0,0,'','','','','','','','','','','','',0,'','');
      this.usuarioSeleccionado=new Usuario(0,0,'','');
      this.result = result;
      this.toastr.success('Datos de empresa actualizados','Exito',{closeButton:true});
      this.getEmpleados();
    }else{
      this.empleadoSeleccionado=new EmpleadoDetalles(0,0,'','','','','','','','','','','','',0,'','');
      this.usuarioSeleccionado=new Usuario(0,0,'','');
      alert('Faltal!!, fallo al cargar las empresas');
    }
  });
}
seleccionar(empleado:EmpleadoDetalles){
  this.usuarioSeleccionado=new Usuario(0,0,'','');
  for(let i=0; i<this.usuarios.length; i++){
    if(this.usuarios[i].idempleado == empleado.idempleado){
      this.usuarioSeleccionado=this.usuarios[i];
    }
  }
  this.empleadoSeleccionado=empleado;
  console.log(this.empleadoSeleccionado);
}
limpiarForm(form:NgForm){
  form.reset();
  this.empleadoSeleccionado=new EmpleadoDetalles(0,0,'','','','','','','','','','','','',0,'','');
  this.usuarioSeleccionado=new Usuario(0,0,'','');
  this.getEmpleados();
}
public visible(x:boolean){
  this.mostrar=x;
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
  this.empleados=[];
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
      this.empleados[i]=this.result.result[index];
      index++;
  }
  console.log(this.empleados);
}

//Validar (xxx)yyy-zzzz telefonos
public validarTel(){
  var tel = this.empleadoSeleccionado.telefonos;
      var tamaño = tel.length;
      if(tamaño == 3){
          var parent = "("+tel+")";
          this.empleadoSeleccionado.telefonos = parent;
      }
      if(tamaño==8){
          var guion = tel + "-";
          this.empleadoSeleccionado.telefonos = guion;
      }
  }
        




}
