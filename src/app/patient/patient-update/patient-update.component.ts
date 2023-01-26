import { Patient } from './../model/patient.model';
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {

  patient: Patient = new Patient();

  id!: number;

  constructor(private service: PatientService, private router: Router, private route: ActivatedRoute ) {
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

  update(): void {
    if (!this.verifyData(this.patient)) {
      return
    }
    this.service.update(this.id, this.patient).subscribe((res: Patient) => {
      this.router.navigate(['/patient']);
      this.service.message('Paciente atualizado com sucesso!');
    }, err => {
      let error: string = err.error.message[0];
      if (error.startsWith('could not execute statement')) {
      this.service.message('CPF já está em uso por outro paciente.');
      }
      else {
        this.service.message(err.error.message[0]);
      }
    });
  }

  private verifyData(patient: Patient): boolean {
    if (patient.name === null || patient.name === '' || patient.cpf === null || patient.cpf === ''  || patient.age === null) {
      this.service.message('Verifique se todos os campos foram informados.');
      return false;
    }
    return true;
  }

}
