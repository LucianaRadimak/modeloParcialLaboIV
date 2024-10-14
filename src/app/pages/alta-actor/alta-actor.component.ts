import { Component } from '@angular/core';
import { TablaPaisesComponent } from '../../components/tabla-paises/tabla-paises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BdService } from '../../servicios/bd.service';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl } from '@angular/forms';
import { Actor } from '../../clases/actor';

@Component({
  selector: 'app-alta-actor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, TablaPaisesComponent],
  templateUrl: './alta-actor.component.html',
  styleUrl: './alta-actor.component.css'
})
export class AltaActorComponent {
  encuestaForm: FormGroup;
  pais!: any;
  constructor(private fb: FormBuilder, private bdService: BdService) {
    this.encuestaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/)]],
      apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/)]],
      edad: [18, [Validators.required, Validators.max(99)]],
      documento: ['', [Validators.required, Validators.pattern(/^[0-9]{8,11}$/)]],
      pais: [{value:'', disabled: true }, Validators.required],
    });
  }

  onSubmit() {
    if (this.encuestaForm.valid) {
      const respuestas = this.encuestaForm.value;
      const nuevoActor = new Actor(
        respuestas.nombre,
        respuestas.apellido,
        respuestas.documento,
        respuestas.edad,
        this.pais);

      this.bdService.InsertData('actores', nuevoActor.toJson());
      this.pais = null;
      this.encuestaForm.reset();
    } else {
      console.error('Formulario inválido');
    }
  }

  seleccionarPais(event: {pais: any}){
    console.log(event);
    console.log(event.pais.name);
    this.encuestaForm.get('pais')?.setValue(event.pais.name);
    this.pais = event.pais.name;
  }
}
