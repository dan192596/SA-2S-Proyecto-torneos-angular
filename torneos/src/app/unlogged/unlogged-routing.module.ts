import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component'
import { ContactCrudComponent } from './contact/contact-crud/contact-crud.component'

const routes: Routes = [
  { path: '', 
    component: ContactComponent   
  },
  {
    path: 'configurations',
    data: { title: 'Configuraciones' },
    children: [
      {
        path: 'contacts',
        data: { title: 'Usuarios' },
        children: [
          /* BASIC */
          {
            path: 'list',
            component: ContactComponent,
            data: { title: 'Listado de contactos' }
          },
          {
            path: 'create',
            component: ContactCrudComponent,
            data: { title: 'Crear', mode: 'create' }
          },
          {
            path: 'delete',
            component: ContactCrudComponent,
            data: { title: 'Eliminar', mode: 'delete' }
          },          
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnloggedRoutingModule { }
