import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/admin/auth.guard';
import { LoggingGuardGuard } from '../core/guards/admin/logging-guard.guard';
import { ErrorComponent } from '../error/error.component';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { AddCategoryComponent } from './pages/category/add-category/add-category.component';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { RolesComponent } from './pages/roles/roles.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { StaticPageComponent } from './pages/static-page/static-page.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  // {
  //   path:'login', component:LoginComponent, canActivate:[LoggingGuardGuard]
  // },
  // {
  //   path:'login', component:LoginComponent
  // },
  {
    path:'', component:AdminComponent, children:[

      {path:'dash', component:DashboardComponent},

      {path:'category', component:CategoryListComponent},
      
      // {path:'category/add', component:AddCategoryComponent}
      {path:'brand', component:BrandsComponent},

      {path: 'prod', component: ProductsComponent},

      {path: 'user', component: UserListComponent},

      {path: 'role', component: RolesComponent},

      {path: 'staticPage', component: StaticPageComponent},

      {path: 'setting', component: SettingsComponent}
  ]
  },
  {
    path:'**',component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
