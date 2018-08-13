import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../global';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  public url:string;
  constructor(
    private _http:HttpClient
  ){
    this.url = GLOBAL.url;
  }

  public getEmpresas(){
    console.log('Se corrio getEmpresas()');
    return this._http.get(this.url+'empresas/get');
  }

  public addEmpresa(empresa:Empresa){
    console.log('Se corrio addEmpresa()');
    return this._http.post(this.url+'empresas/add',empresa);
  }

  public updateEmpresa(empresa:Empresa){
    return this._http.put(`${this.url}empresas/update/${empresa.idempresa}`,empresa);
  }
  
}
