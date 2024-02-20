import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as Aos from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  title = 'ProyectoFinalAngular';
  ngOnInit(): void {
    Aos.init({
      duration: 1000,
      once:false
    });
    window.addEventListener('load', Aos.refresh)
  }
}

