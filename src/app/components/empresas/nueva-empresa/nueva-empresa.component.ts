import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpresasService } from '../../../services/empresas.service';
import { Empresa } from '../../../models/empresa';
import { ToastrService } from '../../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-nueva-empresa',
  templateUrl: './nueva-empresa.component.html',
  styleUrls: ['./nueva-empresa.component.css']
})
export class NuevaEmpresaComponent{
  //datos de la empresa que se guardara
  public nuevaEmpresa: Empresa; 
  constructor(
    private _empresaService: EmpresasService,
    private toastr:ToastrService
  ){ 
    this.nuevaEmpresa = new Empresa (0,'','','','');
  }

  
  public addEmpresa(){
    this._empresaService.addEmpresa(this.nuevaEmpresa).subscribe(
      result=>{
        if(result['result']){
          this.toastr.success('Nueva empresa agregada','Exito',{closeButton:true});
        }else{
            alert('Faltal!!, fallo al guardar empresa');
            console.log(result['result']);
        }
    });
  }

  public limpiarForm(form:NgForm){
    form.reset();
    this.nuevaEmpresa=new Empresa (0,'','','','');
  }

}
