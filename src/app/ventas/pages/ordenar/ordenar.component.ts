import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMayus()
  {
      if(this.enMayusculas)
      {
          this.enMayusculas = false;
      }
      else
      {
          this.enMayusculas = true;
      }
  }

  ordenamiento:string = 'nombre';
  
  ordenarPor(ordena:string) {
    this.ordenamiento = ordena;
  }

  heroes: Heroe[] = [
    { 
      nombre:'Superman',
      vuela: true,
      color: Color.azul
    },
    { 
      nombre:'Batman',
      vuela: false,
      color: Color.negro
    },
    { 
      nombre:'Robin',
      vuela: false,
      color: Color.verde
    },
    { 
      nombre:'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
    { 
      nombre:'Daredevil',
      vuela: true,
      color: Color.rojo
    }
  ]


}
