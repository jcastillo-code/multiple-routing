import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./layaouts/admin-view/admin-view.module').then(m => m.AdminViewModule)
  },
  {
    path: 'user', 
    loadChildren: () => import('./layaouts/user-view/user-view.module').then(m => m.UserViewModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'user' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
