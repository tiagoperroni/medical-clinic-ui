import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http' ;

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorViewComponent } from './doctor-view/doctor-view.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { DoctorSaveComponent } from './doctor-save/doctor-save.component';

@NgModule({
  declarations: [
    DoctorViewComponent,
    DoctorSaveComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    DoctorRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class DoctorModule { }
