import { Injectable } from '@angular/core';
import { ModeloProyecto } from '@interfaces/modelo';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  public proyectos: ModeloProyecto[] = [
    {
      title: 'Dragon Ball Z',
      url: 'https://list-dragonball.netlify.app',
      ico: 'fab fa-github',
      logo:'assets/logos/favicon.ico',
      githubUrl: 'https://github.com/CinTutuDev/Dragon-Ball-Z',
      img: 'assets/img/dragonBall.PNG'

    },
    {
      title: 'Tutu Gifs',
      url: 'https://tutu-gifs.netlify.app',
      ico: 'fab fa-github',
      logo: 'assets/logos/tutuGifsLog.png',
      githubUrl: 'https://github.com/CinTutuDev/GifsApp?tab=readme-ov-file',
      img: 'assets/img/tutuGifs.PNG'

    },
     {
      title: 'Country App ',
      url: 'https://app-country-explore.netlify.app',
      ico: 'fab fa-github',
      logo: 'assets/logos/countryAppLog.png',
      githubUrl: 'https://github.com/CinTutuDev/CountryApp',
      img: 'assets/img/countyApp.PNG'

    },
    {
      title: 'Heroes App',
      url: 'https://heroes-app-withback.netlify.app',
      ico: 'fab fa-github',
      logo: 'assets/logos/heroesAppLog.png',
      githubUrl: 'https://github.com/CinTutuDev/heroesApp',
      img: 'assets/img/heroes.PNG'

    },

  ];



  obtenerProyectos(): ModeloProyecto[] {
    return this.proyectos;
  }



  /* agregarProyecto(proyecto: ModeloProyecto): void {
    this.proyectos.push(proyecto);
  }

  obtenerProyectos(): ModeloProyecto[] {
    return this.proyectos;
  } */
}
