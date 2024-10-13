import { Component } from '@angular/core';
import { DetallePeliculasComponent } from '../../components/detalle-peliculas/detalle-peliculas.component';
import { TablePeliculasComponent } from '../../components/table-peliculas/table-peliculas.component';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [DetallePeliculasComponent, TablePeliculasComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {

}
