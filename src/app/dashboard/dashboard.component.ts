import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@shared/footer/footer.component';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';
import * as Aos from 'aos';
import { TitleMagicComponent } from '../shared/title-magic/title-magic.component';

@Component({
  standalone: true,
  imports: [RouterModule, SidemenuComponent,TitleMagicComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export default class DashboardComponent {}
