import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../model/doctor.model';

@Component({
  selector: 'app-doctor-save',
  templateUrl: './doctor-save.component.html',
  styleUrls: ['./doctor-save.component.css']
})
export class DoctorSaveComponent implements OnInit {

  doctor: Doctor = new Doctor();

  constructor(private service: DoctorService, private router: Router) {
  }

  ngOnInit(): void {
  }

  save(): void {
    this.service.save(this.doctor).subscribe((res: Doctor) => {
      this.router.navigate(['/doctor']);
      this.service.message('Médico salvo com sucesso!');
    }, err => {
      this.service.message(err.error.message[0]);
      console.log(err);
    });
  }

}
