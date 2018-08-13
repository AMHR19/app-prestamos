import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../global';
import { RedSocial } from '../models/red-social';

@Injectable({
  providedIn: 'root'
})

export class RedesSocialesService {
  public url:string;
  constructor(
    private _http:HttpClient
  ){
    this.url = GLOBAL.url;
  }

  public addRed(red:RedSocial){
    console.log('Se corrio addRed(),');
    return this._http.post(this.url+'redes/add',red);
  }

  public updateRed(red:RedSocial){
    console.log('Se corrio updateRed()');
    return this._http.put(this.url+'redes/update/'+red.idred,red);
  }

  public getRedes(){
    console.log('Se corrio getRedes()');
    return this._http.get(this.url+'redes/get');
  }

}
