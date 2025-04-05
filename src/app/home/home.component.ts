import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmallkekComponent } from '../components/smallkek/smallkek.component';
import { MenuComponent } from '../components/menu/menu.component';
import { Cx1Component } from '../components/cx1/cx1.component';
import { Cx2Component } from '../components/cx2/cx2.component';
import { Cx3Component } from '../components/cx3/cx3.component';
import { BigcardComponent } from '../components/bigcard/bigcard.component';

@Component({
  selector: 'home-root',
  imports: [SmallkekComponent, MenuComponent, Cx1Component, Cx2Component, Cx3Component, BigcardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'meu-blog-comida';
}
