import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModeloProyecto } from '@interfaces/modelo';
import { ProyectosService } from '@services/proyectos-service.service';
import { FooterComponent } from '@shared/footer/footer.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, FooterComponent],
  templateUrl: './repositorios.component.html',
  styles: ``
})
export default class RepositoriosComponent {
  public allProyectos: ModeloProyecto[];

  constructor(private proyectosS: ProyectosService) {
    this.allProyectos = this.proyectosS.obtenerProyectos();
  }
}
