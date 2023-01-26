import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Doctor } from 'src/app/doctor/model/doctor.model';
import { Patient } from 'src/app/patient/model/patient.model';
import { PatientService } from 'src/app/patient/patient.service';
import { Room } from 'src/app/room/model/room.model';
import { RoomService } from 'src/app/room/room.service';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../model/appointment.model';
import { AppointmentDTO } from '../model/appointment.model.dto';

@Component({
  selector: 'app-appointment-save',
  templateUrl: './appointment-save.component.html',
  styleUrls: ['./appointment-save.component.css']
})
export class AppointmentSaveComponent implements OnInit {

  appointmentDTO: AppointmentDTO = new AppointmentDTO();

  selectedDoctor!: number;
  selectedPatient!: number;
  selectedRoom!: number;
  selectedDate = null;
  selectedTime = null;

  doctors: Doctor[] = []
  patients: Patient[] = []
  rooms: Room[] = []

  constructor(
    private appointmentService: AppointmentService,
    private doctorService: DoctorService,
    private patientService: PatientService,
    private roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.getDoctors();
    this.getPatients();
    this.getRooms();
  }

  getDoctors(): void {
    this.doctorService.getAll().subscribe((res) => {
      this.doctors = res;
    }, err => console.log(err));
  }

  getPatients(): void {
    this.patientService.getAll().subscribe((res) => {
      this.patients = res;
    }, err => console.log(err));
  }

  getRooms(): void {
    this.roomService.getAll().subscribe((res) => {
      this.rooms = res;
    }, err => console.log(err));
  }

  save(): void {
    let newDate: moment.Moment = moment.utc(this.selectedDate).local();
    let dataString = newDate.format("YYYY-MM-DD") + "T" + this.selectedTime;

    if (!this.verifyData()) {
      this.appointmentService.message('Verifique se todos os campos foram informados.');
    }
    else {
      this.appointmentDTO.doctorId = this.selectedDoctor;
      this.appointmentDTO.patientId = this.selectedPatient;
      this.appointmentDTO.roomId = this.selectedRoom;
      this.appointmentDTO.appointmentDate = dataString;

    this.appointmentService.save(this.appointmentDTO).subscribe((res) => {
      console.log(res);
    }, err => {
      console.log(err);
    });
    }


  }

  verifyData(): boolean {
    if (this.selectedDoctor === undefined || this.selectedPatient === undefined ||
      this.selectedRoom === undefined || this.selectedDate === null || this.selectedTime === null) {
        return false;
      }
      return true;
  }

}
