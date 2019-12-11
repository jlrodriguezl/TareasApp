import { Component } from '@angular/core';
import { PendientesService } from '../services/pendientes.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from '../models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public pendienteService: PendientesService,
              private router: Router,
              private alertController: AlertController) {}
  
  async agregarLista() {
    const alert = await this.alertController.create({
      header: 'Nuevo Pendiente',      
      inputs:[
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre del pendiente'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>{
            console.log('Cancelar acción');
          }
        },
        {
          text: 'Crear',
          handler: (data) =>{
            console.log(data);
            if(data.titulo.length == 0){
              return;
            }
            const id = this.pendienteService.crearPendiente(data.titulo);
            this.router.navigateByUrl(`tabs/tab1/agregar/${ id }`);  
          }
        }
      ]
    });

    await alert.present();
  }            

  
  
}
