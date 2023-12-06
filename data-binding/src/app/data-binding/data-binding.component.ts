import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuFormComponent } from '../meu-form/MeuFormComponent';
import { InputPropertyComponent } from '../input-property/input-property.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule,  MeuFormComponent,InputPropertyComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {


nomeCurso: string ='';
valorInicial: number=15;

onMudouValor(evento: any){
  console.log(evento.novoValor);
}

}
