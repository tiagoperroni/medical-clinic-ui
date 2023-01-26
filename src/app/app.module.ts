import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppointmentModule } from './appointment/appointment/appointment.module';
import { DoctorModule } from './doctor/doctor/doctor.module';
import { PatientModule } from './patient/patient/patient.module';
import { RoomModule } from './room/room/room.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DoctorModule,
    RoomModule,
    PatientModule,
    AppointmentModule,
    BrowserAnimationsModule,
    MatSlideToggleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
