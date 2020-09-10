import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminViewComponent } from './admin-view.component';


const routes: Routes = [
  { path: '', component: AdminViewComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('../../modules/dashboard/dashboard.module').then(mod => mod.DashboardModule),
      },
      {
        path: "map",
        loadChildren: () => import('../../modules/map/map.module').then(mod => mod.MapModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminViewRoutingModule { }
