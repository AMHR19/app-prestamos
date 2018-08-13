/**Notas
 * Las empresas no utilizan empresaDetalle
 */
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmpresasService } from '../../../services/empresas.service';
import { Empresa } from '../../../models/empresa';


@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css'],
  providers:[EmpresasService]
})
export class ListaEmpresasComponent implements OnInit {
  //resultado de peticion getEmpresas();
  public result:any;
  //lista de empresas
  public empresas:Array<Empresa>;
  //empresa seleccionada para editar o ver
  public empresaSeleccionada:Empresa
  //variables para la paginacion:
  public pag:number; //numero de la pagina en que se encuentra
  public numRow:number;//numero de rows
  public numPag:number; //numero de paginas
  public arrayPag:Array<number>; //array que guardara el numero de paginas

  constructor(
    private _EmpresasService:EmpresasService,
    private toastr:ToastrService
  ){
    this.arrayPag=[];
    this.pag=1;
    this.empresaSeleccionada=new Empresa(0,'','','','');
  }

  ngOnInit(){
    this.getEmpresas();
  }

  getEmpresas(){
    this._EmpresasService.getEmpresas().subscribe(result=>{
      if(result['result']){
        this.result = result;
        this.toastr.info('Lista actualizada empresas','Info',{timeOut:1000});
        this.calcularPaginacion();
      }else{
        alert('Faltal!!, fallo al cargar las empresas');
      }
    });
  }
  updateEmpresa(){
    this._EmpresasService.updateEmpresa(this.empresaSeleccionada).subscribe(result=>{
      if(result['result']){
        this.empresaSeleccionada=new Empresa(0,'','','','');
        this.result = result;
        this.toastr.success('Datos de empresa actualizados','Exito',{closeButton:true});
        this.getEmpresas();
      }else{
        this.empresaSeleccionada=new Empresa(0,'','','','');
        alert('Faltal!!, fallo al cargar las empresas');
      }
    });
  }
  seleccionar(empresa:Empresa){
    this.empresaSeleccionada=empresa;
    console.log(this.empresaSeleccionada);
  }
  limpiarForm(form:NgForm){
    form.reset();
    this.empresaSeleccionada=new Empresa(0,'','','','');
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
    this.empresas=[];
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
        this.empresas[i]=this.result.result[index];
        index++;
    }
    console.log(this.empresas);
}

}
