import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-meu-form',
  standalone: true,
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  url = 'http://loiane.training';
  cursoAngular: boolean = true;
  urlImagem = '"https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"';

  valorAtual: string = '';
  valorSalvo: string = '';


  isMouseOver: boolean = false;
  pessoa: any = {
    nome: 'seb',
    idade: 20
  };

  nome: string = 'abc';





  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão Clicado!');
  }

  onKeyUp($evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>$evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }


  onMouaseOverOUt() {
    this.isMouseOver = !this.isMouseOver;
  }
  ngOnInit() {
  }

}
