import { Component, OnInit, Input } from '@angular/core';
import { PendientesService } from 'src/app/services/pendientes.service';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.scss'],
})
export class PendientesComponent implements OnInit {

  @Input() terminada = true;

  constructor(private pendienteService: PendientesService,
              private router: Router) { }

  ngOnInit() {}

  abrirTareas(pendiente: Lista){
    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${pendiente.id}`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${pendiente.id}`);
    }
    
  }
}
