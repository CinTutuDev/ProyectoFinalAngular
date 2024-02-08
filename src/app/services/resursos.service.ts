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
      title: 'Recurso 1',
      url: 'https://tailwindcomponents.com/component/dashboard-example',
      ico: 'icono1.png',
    },
    {
      title: 'Recurso 1',
      url: 'https://github.com/CinTutuDev/Comandos-de-Angular',
      ico: 'icono1.png',
    },
  ];
  constructor() {}
}
