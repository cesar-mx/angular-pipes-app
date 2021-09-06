import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(values: Heroe[], propiedad: string='nombre' ): Heroe[] {
    
    switch(propiedad)
    {
        case 'nombre':
          return values.sort( (a,b) => (a.nombre > b.nombre ? 1 : -1 ));
        case 'vuela':
          return values.sort( (a,b) => (a.vuela > b.vuela ? 1 : -1 ));
        case 'color':
          return values.sort( (a,b) => (a.color > b.color ? 1 : -1 ));
        default:
          return values.sort( (a,b) => (a.nombre > b.nombre ? 1 : -1 ));

    }

  }

}
