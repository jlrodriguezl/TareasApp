import { Component, OnInit } from '@angular/core';
import { PendientesService } from 'src/app/services/pendientes.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  pendiente: Lista;
  nombreTarea: string;

  constructor(private pendientesService: PendientesService,
              private route: ActivatedRoute) { 
    const pendienteId = this.route.snapshot.paramMap.get('id');
    this.pendiente = pendientesService.obtenerPendiente(pendienteId);
    console.log(this.pendiente);                
  }

  ngOnInit() {
  }

  agregarTarea(){
    if(this.nombreTarea.length === 0){
      return;
    }
    const nuevaTarea = new ListaItem(this.nombreTarea);
    this.pendiente.items.push(nuevaTarea);
    this.nombreTarea = '';
    this.pendientesService.guardarStorage();
  }

  cambioCheck(tarea: ListaItem){
    //Obtener el numero de tareas sin completar
    const pendientes = this.pendiente.items.filter(
      itemData =>{
        return !itemData.completado;
      }).length;
      console.log(pendientes);
       
      //Cambiar el estado del pendiente
      if(pendientes === 0)
        this.pendiente.terminada = true;
      else 
        this.pendiente.terminada = false;  

      this.pendientesService.guardarStorage();   
  }
  borrar(i: number){
    this.pendiente.items.splice(i, 1);
    this.pendientesService.guardarStorage();
  }
}
