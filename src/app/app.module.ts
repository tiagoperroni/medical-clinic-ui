import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppointmentModule } from './appointment/appointment/appointment.module';
import { DoctorModule } from './doctor/doctor/doctor.module';
import { PatientModule } from './patient/patient/patient.module';
import { RoomModule } from './room/room/room.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DoctorModule, RoomModule, PatientModule, AppointmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
