import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// importar la interfaz del modelo 
import {FormAdulto} from '../models/FormAdulto';
import {Observable} from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class FormAdultoService {

  API_URI='http://localhost:8130/supergiros'

  constructor(private http:HttpClient) { }

  // consultar juegos disponibles 
  getArticulos(){
    // return this.http.get('http://localhost:3000/api/games');
    return this.http.get(this.API_URI+'/form');
  }
  // Consultar un juego por un id 
  getArticulo(id:string){
    return this.http.get(this.API_URI+'/form/'+id);
  }

  // guardar un juego, debe cumplir con la interfaz del modelo
  saveArticulo(formAdulto:FormAdulto){
    return this.http.post(this.API_URI+'/form',formAdulto);
  }
  // Eliminar juego 
  // deleteArticulo(id:string){
  //   return this.http.delete(this.API_URI+'/articuloss/'+id);
  // }
  deleteArticulo(id:string|number, deleteArticulo:FormAdulto):Observable<FormAdulto>{
    return this.http.patch(this.API_URI+'/form/'+id,deleteArticulo);
  }
  // Actualizar juego 
  // updateGame(id:string|number, updateGame:Game){
  // updateGame(id:string|number, updateGame:Game):Observable<Game>{
  //   // updateGame
  //   // return this.http.put(this.API_URI+'/games/'+id, updateGame);
  //   return this.http.put(this.API_URI+'/games/${id})', updateGame);
  // }

  updateArticulo(id:string|number, updateArticulo:FormAdulto):Observable<FormAdulto>{
    return this.http.put(this.API_URI+'/form/'+id,updateArticulo);
  // updateGame(game:Game){
  //   return this.http.post(this.API_URI+'/games',game);
  }
}