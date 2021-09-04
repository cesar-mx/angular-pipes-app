import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre:string= "Cesar";
  genero:string="masculino";

  invitacionMap = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  clientes:string[] =["Cesar","Juan","Pedro", "Paco"];

  clientesMap = {
    '=0':'no tenemos clientes',
    '=1':'tenemos un cliente',
    'other': "# clientes esperando"
  }
  cambiarPersona()
  {
    if(this.nombre == "Cesar")
    {
        this.nombre = "Melissa";
        this.genero = "femenino";
    }
    else
    {
      this.nombre = "Cesar";
      this.genero = "masculino";
    }    
  }

  popLast()
  {
    this.clientes.pop();
  }

  persona= {
    nombre :  "César",
    edad :  27,
    direccion :  "Tijuana, BC, México",

  }

  //async pipe

  myObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject)=>{

    setTimeout(()=>{
      resolve("fin de la promesa!")
    }, 3000);

  });

}
