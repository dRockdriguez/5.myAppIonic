import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/classes/index';
import { AlertController, NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {
  nombreLista:string = "";
  nombreItem:string = "";

  items:ListaItem[] = [];

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public listaDeseos: ListaDeseosService
  ) {
  }

  ngOnInit() {}

  agregar(){
    if(this.nombreItem.length == 0){
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;
    this.nombreItem = "";
    this.items.push(item);
  }

  eliminarItem(i){
    this.items.splice(i, 1);
  }

  guardarLista(){
    if(this.nombreLista.length == 0){
      let alert = this.alertCtrl.create({
        title: 'Nombre vacío',
        subTitle: 'El nombre de la lista es obligatorio.',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let lista = new Lista(this.nombreLista);
    lista.items = this.items;

    //this.listaDeseos.listas.push(lista);
    this.listaDeseos.agregarLista(lista);

    this.navCtrl.pop();
  }
}
