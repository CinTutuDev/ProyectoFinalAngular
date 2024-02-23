import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@shared/footer/footer.component';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';
import * as Aos from 'aos';


@Component({
  standalone: true,
  imports: [RouterModule, SidemenuComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent  {



}
