import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../model/patient.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-save',
  templateUrl: './patient-save.component.html',
  styleUrls: ['./patient-save.component.css']
})
export class PatientSaveComponent implements OnInit {

  patient: Patient = new Patient();

  constructor(private service: PatientService, private router: Router) {
  }

  ngOnInit(): void {
  }

  save(): void {
    this.service.save(this.patient).subscribe((res: Patient) => {
      this.router.navigate(['/patient']);
      this.service.message('Paciente salvo com sucesso!');
    }, err => {
      this.service.message(err.error.message[0]);
      console.log(err);
    });
  }

}
