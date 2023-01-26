import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../model/appointment.model';

@Component({
  selector: 'app-appointment-delete',
  templateUrl: './appointment-delete.component.html',
  styleUrls: ['./appointment-delete.component.css']
})
export class AppointmentDeleteComponent implements OnInit {

  appointment: Appointment = new Appointment();

  id!: number;

  constructor(private service: AppointmentService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getById();
  }

  getById(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe((res) => {
      this.appointment = res;
    }, err => {
      this.service.message(err);
    });

  }

  delete(): void {
    this.service.delete(this.id).subscribe((res: any) => {
      this.router.navigate(['/appointment']);
      this.service.message('A consulta foi excluída com sucesso!');
    }, err => {
      this.service.message(err.error.message[0]);
      console.log(err);
    });
  }

}
