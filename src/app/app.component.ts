import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from '@shared/loading/loading.component';
import * as Aos from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ProyectoFinalAngular';
  public load: Boolean = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.load = true;
    }, 4000);

    Aos.init({
      duration: 1000,
      once: false,
    });
    window.addEventListener('load', Aos.refresh);
  }
}
