import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {AntdModule} from 'src/app/antd.module';
import { LoginComponent } from './pages/auth/login/login.component'
import {MaterialModule} from 'src/app/material.module'
import {CoreModule} from './../core/core.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import { AddCategoryComponent } from './pages/category/add-category/add-category.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { ProductsComponent } from './pages/products/products.component';
import { RolesComponent } from './pages/roles/roles.component';
import { StaticPageComponent } from './pages/static-page/static-page.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BrandsComponent } from './pages/brands/brands.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    LoginComponent,
    CategoryListComponent,
    AddCategoryComponent,
    UserListComponent,
    ProductsComponent,
    RolesComponent,
    StaticPageComponent,
    SettingsComponent,
    BrandsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AntdModule,
    MaterialModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
