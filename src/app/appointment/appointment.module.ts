import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http' ;

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentSaveComponent } from './appointment-save/appointment-save.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { AppointmentUpdateComponent } from './appointment-update/appointment-update.component';
import { AppointmentDeleteComponent } from './appointment-delete/appointment-delete.component';

@NgModule({
  declarations: [
    AppointmentSaveComponent,
       AppointmentViewComponent,
       AppointmentUpdateComponent,
       AppointmentDeleteComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class AppointmentModule { }
