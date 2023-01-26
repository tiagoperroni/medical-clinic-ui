import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentDeleteComponent } from './appointment/appointment-delete/appointment-delete.component';
import { AppointmentSaveComponent } from './appointment/appointment-save/appointment-save.component';
import { AppointmentUpdateComponent } from './appointment/appointment-update/appointment-update.component';
import { AppointmentViewComponent } from './appointment/appointment-view/appointment-view.component';
import { DoctorDeleteComponent } from './doctor/doctor-delete/doctor-delete.component';
import { DoctorSaveComponent } from './doctor/doctor-save/doctor-save.component';
import { DoctorUpdateComponent } from './doctor/doctor-update/doctor-update.component';
import { DoctorViewComponent } from './doctor/doctor-view/doctor-view.component';
import { PatientDeleteComponent } from './patient/patient-delete/patient-delete.component';
import { PatientSaveComponent } from './patient/patient-save/patient-save.component';
import { PatientUpdateComponent } from './patient/patient-update/patient-update.component';
import { PatientViewComponent } from './patient/patient-view/patient-view.component';

import { RoomDeleteComponent } from './room/room-delete/room-delete.component';
import { RoomSaveComponent } from './room/room-save/room-save.component';
import { RoomUpdateComponent } from './room/room-update/room-update.component';
import { RoomViewComponent } from './room/room-view/room-view.component';

const routes: Routes = [
  { path: 'doctor', component: DoctorViewComponent },
  { path: 'doctor/save', component: DoctorSaveComponent },
  { path: 'doctor/update/:id', component: DoctorUpdateComponent },
  { path: 'doctor/delete/:id', component: DoctorDeleteComponent },

  { path: 'room', component: RoomViewComponent },
  { path: 'room/save', component: RoomSaveComponent },
  { path: 'room/update/:id', component: RoomUpdateComponent },
  { path: 'room/delete/:id', component: RoomDeleteComponent },

  { path: 'patient', component: PatientViewComponent },
  { path: 'patient/save', component: PatientSaveComponent },
  { path: 'patient/update/:id', component: PatientUpdateComponent },
  { path: 'patient/delete/:id', component: PatientDeleteComponent },

  { path: 'appointment', component: AppointmentViewComponent },
  { path: 'appointment/save', component: AppointmentSaveComponent },
  { path: 'appointment/update/:id', component: AppointmentUpdateComponent },
  { path: 'appointment/delete/:id', component: AppointmentDeleteComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
