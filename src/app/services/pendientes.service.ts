import { Injectable } from '@angular/core';
import {Lista} from '../models/lista.model'

@Injectable({
  providedIn: 'root'
})
export class PendientesService {
  listas: Lista[] = [];
  constructor() { 
    this.cargarStorage();  
  }
  crearPendiente(titulo:string){
    const nuevoPendiente = new Lista(titulo);
    this.listas.push(nuevoPendiente);
    this.guardarStorage();
    return nuevoPendiente.id;
  }

  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }
  cargarStorage(){
    if(localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }
  obtenerPendiente(id:string | number){
    return this.listas.find(listaData => {
      return listaData.id == id;
    });
  }
}

