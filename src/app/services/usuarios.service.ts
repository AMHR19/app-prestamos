import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../global';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public url:string;
  constructor(
    private _http:HttpClient
  ){
    this.url = GLOBAL.url;
  }

  
  public updateUsuario(usuario:Usuario){
    console.log('Se corrio updateUsuario()');
    return this._http.put(this.url+'redes/update/'+usuario.idusuario,usuario);
  }

  public getUsuarios(){
    console.log('Se corrio getUsuarios()');
    return this._http.get(this.url+'usuarios/get');
  }

}
