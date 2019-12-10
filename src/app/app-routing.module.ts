import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {HomeComponent} from './home/home.component';
import {DetailsUserComponent} from './usuarios/details-user/details-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '*',
    component: HomeComponent
  },
   {
     path: 'dashboard',
     loadChildren: './usuarios/usuarios.module#UsuariosModule'
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
