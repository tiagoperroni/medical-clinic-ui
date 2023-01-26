import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http' ;


import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


import { PatientRoutingModule } from './patient-routing.module';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { PatientSaveComponent } from './patient-save/patient-save.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { PatientViewComponent } from './patient-view/patient-view.component';

@NgModule({
  declarations: [
    PatientUpdateComponent,
    PatientSaveComponent,
    PatientDeleteComponent,
    PatientViewComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule, FormsModule, ReactiveFormsModule
  ]
})
export class PatientModule { }
