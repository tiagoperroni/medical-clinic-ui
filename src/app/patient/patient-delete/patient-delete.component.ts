import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../model/patient.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent implements OnInit {

  patient: Patient = new Patient();

  id!: number;

  constructor(private service: PatientService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getById();
  }

  getById(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe((res) => {
      this.patient = res;
    }, err => {
      this.service.message(err);
    });

  }

  delete(): void {
    this.service.delete(this.id).subscribe((res: any) => {
      this.router.navigate(['/patient']);
      this.service.message('Paciente deletado com sucesso!');
    }, err => {
      this.service.message(err.error.message[0]);
      console.log(err);
    });
  }

}
