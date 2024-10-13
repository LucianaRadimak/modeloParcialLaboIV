import { Component } from '@angular/core';
import { TablaPaisesComponent } from '../../components/tabla-paises/tabla-paises.component';

@Component({
  selector: 'app-alta-actor',
  standalone: true,
  imports: [TablaPaisesComponent],
  templateUrl: './alta-actor.component.html',
  styleUrl: './alta-actor.component.css'
})
export class AltaActorComponent {

}
