import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TablaUsuariosComponent} from './tabla-usuarios/tabla-usuarios.component';
import {Usuarios_Routes} from './usuarios-routing';
import {UsuariosComponent} from './usuarios.component';
import {DetailsUserComponent} from './details-user/details-user.component';
import { TableDataComponent } from './details-user/table-data/table-data.component';
import { AlbumsComponent } from './details-user/albums/albums.component';
import { PostsComponent } from './details-user/posts/posts.component';



@NgModule({
  imports: [
    Usuarios_Routes,
    CommonModule
  ],
  declarations: [
    TablaUsuariosComponent,
    UsuariosComponent,
    DetailsUserComponent,
    TableDataComponent,
    AlbumsComponent,
    PostsComponent
  ]

})
export class UsuariosModule { }
