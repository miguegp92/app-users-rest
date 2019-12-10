
import { Routes, RouterModule } from '@angular/router';
import {UsuariosComponent} from './usuarios.component';
import {DetailsUserComponent} from './details-user/details-user.component';
import {TablaUsuariosComponent} from './tabla-usuarios/tabla-usuarios.component';
import {AlbumsComponent} from './details-user/albums/albums.component';
import {PostsComponent} from './details-user/posts/posts.component';

const usuariosRoutes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'users'},
      {path: 'users', component: TablaUsuariosComponent},
      {path: 'users/:user', component: DetailsUserComponent},
      {path: 'users/:user/albums/:id', component: AlbumsComponent},
      {path: 'users/:user/posts/:id', component: PostsComponent},
    ]
  },

];
export const Usuarios_Routes =  RouterModule.forChild(usuariosRoutes);
