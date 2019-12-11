import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendientesComponent } from './pendientes/pendientes.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    PendientesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    PendientesComponent
  ]
})
export class ComponentsModule { }
