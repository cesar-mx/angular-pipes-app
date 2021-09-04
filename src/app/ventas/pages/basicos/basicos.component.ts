import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "cesar";
  nombreUpper: string = "CESAR";
  nombreCompleto: string =  "cEsar e. hernandeZ";

    fecha: Date = new Date();
}
