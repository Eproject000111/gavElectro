import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from 'src/app/material.module'




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class CoreModule { }
