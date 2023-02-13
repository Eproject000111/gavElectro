import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin' },

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},

  { path: 'dash', loadChildren: () => import('./home/dashboard/dashboard.module').then(m => m.DashboardModule)},

  // {path: 'login', component: LoginComponent},

  // {path:"signup", component: SignupComponent},

  { path:'**', component:ErrorComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
