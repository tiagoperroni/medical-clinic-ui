import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../model/doctor.model';

@Component({
  selector: 'app-doctor-update',
  templateUrl: './doctor-update.component.html',
  styleUrls: ['./doctor-update.component.css']
})
export class DoctorUpdateComponent implements OnInit {

  doctor: Doctor = new Doctor();

  id!: number;

  constructor(private service: DoctorService, private router: Router, private route: ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.getById();
  }

  getById(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe((res) => {
      this.doctor = res;
    }, err => {
      this.service.message(err);
    });

  }

  update(): void {
    if (!this.verifyData(this.doctor)) {
      return
    }
    this.service.update(this.id, this.doctor).subscribe((res: Doctor) => {
      this.router.navigate(['/doctor']);
      this.service.message('Médico atualizado com sucesso!');
    }, err => {
      this.service.message(err.error.message[0]);
      console.log(err);
    });
  }

  private verifyData(doctor: Doctor): boolean {
    if (doctor.name === null || doctor.name === '' || doctor.crm === null || doctor.crm === '') {
      this.service.message('Verifique se todos os campos foram inbformados.');
      return false;
    }
    return true;

  }



}
