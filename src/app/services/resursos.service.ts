import { Injectable } from '@angular/core';
import { Recursos } from '@interfaces/recursos';

@Injectable({
  providedIn: 'root',
})
export class ResursosService {
  public recursos: Recursos[] = [
    {
      title: 'My Súper índice',
      url: 'https://github.com/CinTutuDev/Comandos-de-Angular',
      ico: 'fab fa-angular',
    },
    {
      title: 'MongoDB',
      url: 'https://www.mongodb.com/try/download/community',
      ico: 'fa-solid fa-feather-pointed',
    },
    {
      title: 'Postman',
      url: 'https://www.postman.com/downloads',
      ico: 'fa-solid fa-signs-post',
    },
    {
      title: 'Página oficial Angular',
      url: 'https://angular.io/cli',
      ico: 'fa-brands fa-angular',
    },
    {
      title: 'Angular 17',
      url: 'https://angular.dev',
      ico: 'fa-brands fa-angular',
    },
    {
      title: 'Angular Material',
      url: 'https://material.angular.io',
      ico: 'fa-brands fa-angular',
    },
    {
      title: 'TypeScript',
      url: 'https://www.typescriptlang.org',
      ico: 'fas fa-code',
    },
    {
      title: 'bootstrap',
      url: 'https://getbootstrap.com',
      ico: 'fab fa-bootstrap',
    },
    {
      title: 'netlify',
      url: 'https://www.netlify.com',
      ico: 'fa-brands fa-battle-net',
    },
    {
      title: 'quicktype',
      url: 'https://quicktype.io/',
      ico: 'fas fa-file-code',
    },

    {
      title: 'API restcountries',
      url: 'https://restcountries.com',
      ico: 'fas fa-globe',
    },
    {
      title: 'mapbox',
      url: 'https://www.mapbox.com',
      ico: 'fas fa-map-marked',
    },
    {
      title: 'tailwind Components',
      url: 'https://tailwindcomponents.com',
      ico: 'fa-solid fa-wind',
    },
  ];
  constructor() {}
}
