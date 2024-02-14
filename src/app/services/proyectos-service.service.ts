import { Injectable } from '@angular/core';
import { ModeloProyecto } from '@interfaces/modelo';

@Injectable({
  providedIn: 'root'
})
export class ProyectosServiceService {

  private proyectos: ModeloProyecto[] = [
    {
      title: 'My Súper índice',
      url: 'https://list-dragonball.netlify.app',
      ico: 'fab fa-github',
      githubUrl: 'https://github.com/CinTutuDev/Dragon-Ball-Z',
      img: ''

    },
  ];




  agregarProyecto(proyecto: ModeloProyecto): void {
    this.proyectos.push(proyecto);
  }

  obtenerProyectos(): ModeloProyecto[] {
    return this.proyectos;
  }
}
