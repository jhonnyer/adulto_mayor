import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importar modulo HTTP 
import { HttpClientModule } from '@angular/common/http';
//Guardar datos de formulario 
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAdultoComponent } from './components/form-adulto/form-adulto.component';
import {FormAdultoService} from './services/form-adulto.service';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ListFormComponent } from './components/list-form/list-form.component';



@NgModule({
  declarations: [
    AppComponent,
    FormAdultoComponent,
    NavegacionComponent,
    ListFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FormAdultoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
