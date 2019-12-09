import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuariosComponent} from './usuarios.component';
import {DetailsUserComponent} from './details-user/details-user.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  },
  {
    path: '*',
    component: UsuariosComponent
  },
  {
    path: '/:user',
    component: DetailsUserComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsuariosRouting { }
