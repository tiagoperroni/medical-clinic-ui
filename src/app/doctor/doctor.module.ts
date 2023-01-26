import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http' ;

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorViewComponent } from './doctor-view/doctor-view.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    DoctorViewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DoctorRoutingModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class DoctorModule { }
