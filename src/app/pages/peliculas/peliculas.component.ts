import { Component } from '@angular/core';
import { DetallePeliculasComponent } from '../../components/detalle-peliculas/detalle-peliculas.component';
import { TablePeliculasComponent } from '../../components/table-peliculas/table-peliculas.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [DetallePeliculasComponent, TablePeliculasComponent, CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  pelicula!: any;
  seleccionarPelicula(event: { pelicula: any }) {
    console.log(event);
    console.log(event.pelicula.nombre);
    this.pelicula = event.pelicula;
  }
}
