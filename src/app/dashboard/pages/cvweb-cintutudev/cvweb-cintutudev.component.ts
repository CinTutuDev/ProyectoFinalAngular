import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '@shared/footer/footer.component';
import { TitleComponent } from '@shared/title/title.component';


@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, FooterComponent],
  templateUrl: './cvweb-cintutudev.component.html',
  styles: ``
})
export default class CvwebCintutudevComponent {

}
