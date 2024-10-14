import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { BdService } from '../../servicios/bd.service';
import { Actor } from '../../clases/actor';
@Component({
  selector: 'app-tabla-actores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-actores.component.html',
  styleUrl: './tabla-actores.component.css'
})
export class TablaActoresComponent implements OnInit {
  @Output() actor = new EventEmitter<{ actor: string }>();
  actores: Actor[] = [];
  constructor(
    private bdService: BdService,
  ) {}

  ngOnInit(): void {
    this.loadActores();
  }
  
  
  loadActores(): void {
    this.bdService.getActores().subscribe(data => {
      console.log(data);
      data.forEach(actor => {
        this.actores.push(new Actor(actor.nombre, actor.apellido, actor.documento, actor.edad, actor.pais));
      });
    });
  }

  selectActor(actor: any): void {
    this.actor.emit({actor: actor});
  }
}