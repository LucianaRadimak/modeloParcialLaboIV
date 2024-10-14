import { Component, OnInit } from '@angular/core';
import { TablaActoresComponent } from '../../components/tabla-actores/tabla-actores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BdService } from '../../servicios/bd.service';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs/operators';
import { StorageService } from '../../servicios/storage.service';
import { Pelicula } from '../../clases/pelicula';
@Component({
  selector: 'app-alta-pelicula',
  standalone: true,
  imports: [
    CommonModule,      
    ReactiveFormsModule,
    FormsModule,
    TablaActoresComponent,
  ],
  templateUrl: './alta-pelicula.component.html',
  styleUrl: './alta-pelicula.component.css',
})
export class AltaPeliculaComponent {
  encuestaForm!: FormGroup;
  imagenError = false;
  imagenArchivo: File | null = null;
  urlFoto!: string;
  protagonista!: any;
  constructor(
    
    private fb: FormBuilder,
    private bdService: BdService,
    private storageService: StorageService
  ) {
    
    this.encuestaForm = this.fb.group({
      id: ['', [Validators.required, Validators.min(1)]],
      nombre: ['',   [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/)]],
      tipo: ['', Validators.required],
      fechaEstreno: ['', [Validators.required]],
      publico: ['', [Validators.required]],
      protagonista: [{ value: '', disabled: true }, Validators.required],
      fotoPelicula: [{ value: '' }, Validators.required],
    });
  
  }

  seleccionarActor(event: { actor: any }) {
    console.log(event);
    console.log(event.actor.nombre);
    this.encuestaForm.get('protagonista')?.setValue(event.actor.nombre);
    this.protagonista = event.actor;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type.startsWith('image/')) {
        this.imagenArchivo = file;
        this.imagenError = false;
      } else {
        this.imagenError = true;
      }
    }
  }

  async onSubmit() {
    if (this.encuestaForm.valid && this.imagenArchivo) {
      if (this.imagenArchivo) {
        try {
          const folderPath = 'actores';
          this.urlFoto = await this.storageService.uploadImage(this.imagenArchivo, folderPath);
          const respuestas = this.encuestaForm.value;
          const nuevaPelicula = new Pelicula(
            respuestas.id,
            respuestas.nombre,
            respuestas.tipo,
            new Date(respuestas.fechaEstreno),
            respuestas.publico,
            this.urlFoto,
            this.protagonista.toJson());

          this.bdService.InsertData('peliculas', nuevaPelicula.toJson());
          this.protagonista = null;
          this.encuestaForm.reset();
        } catch (error) {
          console.error("Error subiendo la imagen:", error);
        }
      }
    }
    else{
      console.error('Formulario inválido o imagen no seleccionada');
    }
  }
}
