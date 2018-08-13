import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../global';
import { EmpleadoDetalles } from '../models/empleado-detalles';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  public url:string;
  constructor(
    private _http:HttpClient
  ){
    this.url = GLOBAL.url;
  }

  public addEmpleado(empleado:any){
    console.log('Se corrio addEmpleado(),');
    return this._http.post(this.url+'empleados/add',empleado);
  }

  public updateEmpleado(empleado:any){
    console.log('Se corrio updateEmpleado()');
    return this._http.put(this.url+'empleados/update/'+empleado.idempleado,empleado);
  }

  public getEmpleados(){
    console.log('Se corrio getEmpleados()');
    return this._http.get(this.url+'empleados/get');
  }

  public getEmpleadosDetalles(){
    console.log('Se corrio getEmpleadosDetalles()');
    return this._http.get(this.url+'empleados/getDetalles');
  }

  

}

