import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// importar la interfaz del modelo 
import {Fotos} from '../models/fotos';
import {Observable} from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  API_URI='http://localhost:8130/supergiros'

  constructor(private http:HttpClient) { }

  // consultar juegos disponibles 
  getFotos(){
    // return this.http.get('http://localhost:3000/api/games');
    return this.http.get(this.API_URI+'/fotos');
  }
  // Consultar un juego por un id 
  getFoto(id:string){
    return this.http.get(this.API_URI+'/fotos/'+id);
  }

  // guardar un juego, debe cumplir con la interfaz del modelo
  saveFoto(fotos:Fotos){
    return this.http.post(this.API_URI+'/fotos',fotos);
  }
  // Eliminar juego 
  // deleteArticulo(id:string){
  //   return this.http.delete(this.API_URI+'/articuloss/'+id);
  // }
  deleteFoto(id:string|number, deleteFoto:Fotos):Observable<Fotos>{
    return this.http.patch(this.API_URI+'/fotos/'+id,deleteFoto);
  }
  // Actualizar juego 
  // updateGame(id:string|number, updateGame:Game){
  // updateGame(id:string|number, updateGame:Game):Observable<Game>{
  //   // updateGame
  //   // return this.http.put(this.API_URI+'/games/'+id, updateGame);
  //   return this.http.put(this.API_URI+'/games/${id})', updateGame);
  // }

  updateFoto(id:string|number, updateFoto:Fotos):Observable<Fotos>{
    return this.http.put(this.API_URI+'/fotos/'+id,updateFoto);
  // updateGame(game:Game){
  //   return this.http.post(this.API_URI+'/games',game);
  }
}