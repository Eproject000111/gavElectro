import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children: [
    // {path: 'login', component: LoginComponent},

    // {path:"signup", component: SignupComponent},
  ]},
    
  {path: 'login', component: LoginComponent},

  {path:"signup", component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
