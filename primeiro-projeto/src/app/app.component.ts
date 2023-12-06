import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { CursosComponent } from './cursos/cursos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UsuarioComponent, FuncionarioComponent, CursosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Ola mundo';

}
