import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardUnloggedService } from './app-security/auth-unlogged.service';
import { LayoutComponent } from './unlogged/layout/layout.component';

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuardUnloggedService], 
    loadChildren: () => import('./unlogged/unlogged.module').then(m => m.UnloggedModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
