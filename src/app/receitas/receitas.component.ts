import { Component } from '@angular/core';
import { Cx2Component } from "../components/cx2/cx2.component";
import { Cx3Component } from "../components/cx3/cx3.component";

@Component({
  selector: 'app-receitas',
  imports: [Cx2Component, Cx3Component],
  templateUrl: './receitas.component.html',
  styleUrl: './receitas.component.css'
})
export class ReceitasComponent {

}
