import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {
  id:number;
  lista: Lista;

  constructor(
    private _navCtrl: NavController,
    private _navParams: NavParams,
    private _listaDeseos: ListaDeseosService,
    private alertCtrl: AlertController
  ) {
    this.id = this._navParams.get("i");
    this.lista = this._navParams.get("lista");
  }

  ngOnInit() {}

  actualizar(item:ListaItem){
    item.completado = !item.completado;

    let terminado = true;
    for(let item of this.lista.items){
      if(!item.completado){
        terminado = false;
        break;
      }
    }
    this.lista.terminado = terminado;

    this._listaDeseos.actualizarData();

  }

  borrarLista(){
    let confirm = this.alertCtrl.create({
         title: this.lista.nombre,
         message: '¿Está seguro de eliminar la lista?',
         buttons: ['Cancelar',
           {
             text: 'Eliminar',
             handler: () => {
                this._listaDeseos.eliminarLista(this.id);
                this._navCtrl.pop();
             }
           }
         ]
       });
       confirm.present();
  }
}
