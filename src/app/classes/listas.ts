import { ListaItem } from './lista-item';

export class Lista{
  nombre:string;
  terminado:boolean;
  items: ListaItem[];

  public constructor(
    _nombre:string
  ){
    this.nombre = _nombre;
    this.terminado = false;
  }
}
