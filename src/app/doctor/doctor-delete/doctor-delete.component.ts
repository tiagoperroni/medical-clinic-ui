import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../model/doctor.model';

@Component({
  selector: 'app-doctor-delete',
  templateUrl: './doctor-delete.component.html',
  styleUrls: ['./doctor-delete.component.css']
})
export class DoctorDeleteComponent implements OnInit {

  doctor: Doctor = new Doctor();

  id!: number;

  constructor(private service: DoctorService, private router: Router, private route: ActivatedRoute) {
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

  delete(): void {
    this.service.delete(this.id).subscribe((res: any) => {
      this.router.navigate(['/doctor']);
      this.service.message('Médico deletado com sucesso!');
    }, err => {
      this.service.message(err.error.message[0]);
      console.log(err);
    });
  }

}
