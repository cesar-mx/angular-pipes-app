import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar idiomas de la app
import idiomaEs from '@angular/common/locales/es-MX'
import { registerLocaleData } from '@angular/common'
registerLocaleData(idiomaEs);  


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    AppRouterModule, 
    PrimeNgModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule

  ],
  providers: [  
    {
      provide: LOCALE_ID, useValue:'es-MX'  /*para idioma español*/ 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
