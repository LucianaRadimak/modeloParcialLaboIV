import { Component, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { BdService } from '../../servicios/bd.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-peliculas.component.html',
  styleUrl: './table-peliculas.component.css'
})
export class TablePeliculasComponent {
  @Output() pelicula = new EventEmitter<{ pelicula: string }>();
  peliculas: Pelicula[] = [];
  constructor(
    private bdService: BdService,
  ) {}

  ngOnInit(): void {
    this.loadPeliculas();
  }
  
  
  loadPeliculas(): void {
    this.bdService.getPeliculas().subscribe(data => {
      console.log(data);
      data.forEach(pelicula => {
        this.peliculas.push(new Pelicula(pelicula.id, pelicula.nombre, pelicula.tipo, pelicula.fechaEstreno, pelicula.cantidadPublico, pelicula.foto, pelicula.protagonista));
      });
    });
  }

  selectPelicula(pelicula: any): void {
    this.pelicula.emit({pelicula: pelicula});
  }
}
