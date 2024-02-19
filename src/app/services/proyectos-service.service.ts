import { Injectable } from '@angular/core';
import { ModeloProyecto } from '@interfaces/modelo';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  public proyectos: ModeloProyecto[] = [
    {
      title: 'Dragon Ball Z',
      url: 'https://list-dragonball.netlify.app',
      ico: 'fab fa-github',
      logo: 'assets/logos/favicon.ico',
      githubUrl: 'https://github.com/CinTutuDev/Dragon-Ball-Z',
      img: 'assets/img/dragonBall.PNG',
    },
    {
      title: 'Tutu Gifs',
      url: 'https://tutu-gifs.netlify.app',
      ico: 'fab fa-github',
      logo: 'assets/logos/tutuGifsLog.png',
      githubUrl: 'https://github.com/CinTutuDev/GifsApp?tab=readme-ov-file',
      img: 'assets/img/tutuGifs.PNG',
    },
    {
      title: 'Country App ',
      url: 'https://app-country-explore.netlify.app',
      ico: 'fab fa-github',
      logo: 'assets/logos/countryAppLog.png',
      githubUrl: 'https://github.com/CinTutuDev/CountryApp',
      img: 'assets/img/countyApp.PNG',
    },
    {
      title: 'Heroes App',
      url: 'https://heroes-app-withback.netlify.app',
      ico: 'fab fa-github',
      logo: 'assets/logos/heroesAppLog.png',
      githubUrl: 'https://github.com/CinTutuDev/heroesApp',
      img: 'assets/img/heroes.PNG',
    },
    {
      title: 'Reactive Forms 1',
      url: '',
      ico: 'fab fa-github',
      logo: 'assets/logos/formReactivoLog.png',
      githubUrl: 'https://github.com/CinTutuDev/FormApp',
      img: 'assets/img/formularioReactivos.PNG',
    },
    {
      title: 'Reactive Forms 2 (Dynamic Selectors)',
      url: '',
      ico: 'fab fa-github',
      logo: 'assets/logos/formAppSelectorLog.png',
      githubUrl: 'https://github.com/CinTutuDev/formAppSelectores',
      img: 'assets/img/formSelector.PNG',
    },
    {
      title: ' Lifecycle',
      url: '',
      ico: 'fab fa-github',
      logo: 'assets/logos/lifeCycleLog.png',
      githubUrl: 'https://github.com/CinTutuDev/LifeCycle',
      img: 'assets/img/liveCicle.png',
    },
    {
      title: 'Maps App',
      url: 'https://maps-app-cintutudev.netlify.app',
      ico: 'fab fa-github',
      logo: 'assets/logos/mapsAppLog.png',
      githubUrl: 'https://github.com/CinTutuDev/MapsApp',
      img: 'assets/img/mapsApp.PNG',
    },
    {
      title: 'Auth App',
      url: 'https://authappcintutudev.netlify.app',
      ico: 'fab fa-github',
      logo: 'assets/logos/authAppLog.png',
      githubUrl: 'https://github.com/CinTutuDev/authApp',
      img: 'assets/img/AuthApp.png',
    },
    {
      title: 'Angular17 & Tailwind',
      url: '',
      ico: 'fab fa-github',
      logo: 'assets/logos/favicon17.ico',
      githubUrl: 'https://github.com/CinTutuDev/angular17Dashboard',
      img: 'assets/img/angular17.png',
    },
    {
      title: 'My Super Map',
      url: 'https://supermap.netlify.app/',
      ico: 'fab fa-github',
      logo: 'assets/logos/superMapLog.png',
      githubUrl: 'https://github.com/CinTutuDev/MysuperMap',
      img: 'assets/img/superMap.PNG',
    },
  ];

  obtenerProyectos(): ModeloProyecto[] {
    return this.proyectos;
  }
}
