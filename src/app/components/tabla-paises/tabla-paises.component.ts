import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiPaisesService } from '../../servicios/api-paises.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css'
})
export class TablaPaisesComponent implements OnInit {
  @Output() pais = new EventEmitter<{ pais: string }>();

  constructor(
    private countryService: ApiPaisesService,
  ) {}

  ngOnInit(): void {
    this.loadpaises();
  }
  paises: any[] = [];

  loadpaises(): void {
    Swal.fire({
      title: 'Cargando datos de los paises...',
      html: 'Por favor, espere mientras se cargan los datos.', // Mensaje opcional
      didOpen: () => {
        Swal.showLoading(); // Muestra el spinner de carga
      }
    });
      this.countryService.getCountries().subscribe(data => {
      // Asignar los datos filtrados y mapear la región al español
      this.paises = data.sort((a, b) => a.name.localeCompare(b.name)); // Ordenar por nombre alfabéticamente
      Swal.close();
    });
  }

  selectCountry(country: any): void {
    this.pais.emit({pais: country});
  }
}
