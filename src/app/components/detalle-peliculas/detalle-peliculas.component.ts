import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './detalle-peliculas.component.html',
  styleUrl: './detalle-peliculas.component.css'
})
export class DetallePeliculasComponent {
  @Input() peliculaSeleccionada!: any;

  
}
