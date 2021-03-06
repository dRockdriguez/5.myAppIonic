import { Injectable } from '@angular/core';

import { Lista } from '../classes/listas';

@Injectable()
export class ListaDeseosService {
  listas:Lista[]=[];

  constructor() {
    this.cargarData();
    console.log("ListaDeseosService Arrancado..");
  }

  actualizarData(){
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  cargarData(){
    if(localStorage.getItem("data"))
      this.listas = JSON.parse(localStorage.getItem("data"));
  }

  agregarLista(lista: Lista){
    this.listas.push(lista);
    this.actualizarData();
  }

  eliminarLista(id:number){
    console.log(id);
    this.listas.splice(id, 1);
    this.actualizarData();
  }
}
