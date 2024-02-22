import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ResursosService } from '@services/resursos.service';
import { FooterComponent } from '@shared/footer/footer.component';
import { TitleComponent } from '@shared/title/title.component';


@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, FooterComponent],
  templateUrl: './recursos.component.html',
  styles: ``
})
export default class RecursosComponent {

  public allRecursos = inject(ResursosService);



}
