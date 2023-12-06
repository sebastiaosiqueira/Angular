import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  standalone:true,
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {
@Input('nome') nome: string='Angular';
   @Input() valor: number=0;

   @Output() mudouValor = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

}
