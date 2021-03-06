import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailsUserComponent } from './usuarios/details-user/details-user.component';
import {UsuariosModule} from './usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent,
    // UsuariosComponent,
    LoginComponent,
    HomeComponent,
    // DetailsUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
