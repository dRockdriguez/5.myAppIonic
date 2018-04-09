import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../classes/listas';
@Pipe({
  name: 'pendientes',
  pure: false //No es un pipe puro, para que ionic lo llame cada vez que hay que pintar
})
export class PendientesPipe implements PipeTransform {
  transform(listas: Lista[], estado: boolean = false): Lista[] {
    let listaFiltrada:Lista[] = [];
    for(let lista of listas){
        if(lista.terminado == estado){
          listaFiltrada.push(lista);
        }
    }
    return listaFiltrada;
  }
}
