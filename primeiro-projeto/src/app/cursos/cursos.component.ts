import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  templateUrl: './cursos.component.html',
  imports: [CommonModule, CursosComponent, CursoDetalheComponent],
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal!: string;

  constructor() {

    this.nomePortal = 'http://loiane.training';
  }

  ngOnInit() {

  }

}
