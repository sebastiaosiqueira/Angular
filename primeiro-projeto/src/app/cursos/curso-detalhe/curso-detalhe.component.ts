import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from '../../Service/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  cursos: string[] | undefined;
    constructor(private  cursosService: CursosService) {


      this.cursos = this.cursosService.getCursos();
     }

  ngOnInit() {
  }

}
