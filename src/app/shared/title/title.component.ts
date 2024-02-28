import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  template: ``,
})
export class TitleComponent {
  @Input({ required: true }) title!: string;

  public titleCurso: string= 'De cero a experto ';
}
