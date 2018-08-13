import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../global';
import { Sucursal } from '../models/sucursal';
import { SucursalDetalles } from '../models/sucursal-detalles';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  public url:string;
  constructor(
    private _http:HttpClient
  ){
    this.url = GLOBAL.url;
  }

  public addSucursal(sucursal:any){
    console.log('Se corrio addSucursal(),');
    return this._http.post(this.url+'sucursales/add',sucursal);
  }

  public updateSucursal(sucursal:Sucursal){
    console.log('Se corrio updateSucursal()');
    return this._http.put(this.url+'redes/update/'+sucursal.idsucursal,sucursal);
  }

  public getsucursal(){
    console.log('Se corrio getsucursal()');
    return this._http.get(this.url+'sucursales/get');
  }

  public getSucursales(){
    console.log('Se corrio getSucursal()');
    return this._http.get(this.url+'sucursales/get');
  }

  public getSucursalesDetalles(){
    console.log('Se corrio getSucursalDetalles()');
    return this._http.get(this.url+'sucursales/getDetalles');
  }

  public setEncargado(sucursal:SucursalDetalles){
    console.log('Se corrio setEncargado()');;
    return this._http.put(this.url+'sucursales/setEncargado/'+sucursal.idsucursal,sucursal);
  }

}

