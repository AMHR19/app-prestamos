import { Component, OnInit } from '@angular/core';
import { SucursalesService } from '../../../services/sucursales.service';
import { ToastrService } from '../../../../../node_modules/ngx-toastr';
import { Sucursal } from '../../../models/sucursal';
import { NgForm } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-nueva-sucursal',
  templateUrl: './nueva-sucursal.component.html',
  styleUrls: ['./nueva-sucursal.component.css'],
  providers:[SucursalesService]
})

export class NuevaSucursalComponent{
  //datos de la empresa que se guardara
  public nuevaSucursal: Sucursal; 
  //datos de la red social
  public nombre_red:string;
  public url:string;
  constructor(
    private _SucursalService: SucursalesService,
    private toastr:ToastrService
  ){ 
    this.nuevaSucursal = new Sucursal (0,'','','','','','','','','','','');
    this.nombre_red='FACEBOOK';
    this.url='';
  }


  public addSucursal(){
    var data = {
      nombre:this.nuevaSucursal.nombre,
      hora_inicio:this.nuevaSucursal.hora_inicio,
      hora_fin:this.nuevaSucursal.hora_fin,
      telefono:this.nuevaSucursal.telefono,
      callenum:this.nuevaSucursal.callenum,
      colonia:this.nuevaSucursal.colonia,
      poblacion:this.nuevaSucursal.poblacion,
      municipio:this.nuevaSucursal.municipio,
      estado:this.nuevaSucursal.estado,
      cp:this.nuevaSucursal.cp,
      nombre_red:this.nombre_red,
      url:this.url
    }
    this._SucursalService.addSucursal(data).subscribe(
      result=>{
        if(result['result']){
          this.toastr.success('Nueva sucursal agregada','Exito',{closeButton:true});
        }else{
            alert('Faltal!!, fallo al guardar empresa');
            console.log(result['result']);
        }
    });
  }

  public limpiarForm(form:NgForm){
    form.reset();
    this.nuevaSucursal = new Sucursal (0,'','','','','','','','','','','');
  }



  public validarTel(){
    var tel = this.nuevaSucursal.telefono;
    var tamaño = tel.length;
    if(tamaño == 3){
        var parent = "("+tel+")";
        this.nuevaSucursal.telefono = parent;
    }
    if(tamaño==8){
        var guion = tel + "-";
        this.nuevaSucursal.telefono = guion;
    }
  }

}