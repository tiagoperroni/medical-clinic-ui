import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../model/appointment.model';

@Component({
  selector: 'app-appointment-view',
  templateUrl: './appointment-view.component.html',
  styleUrls: ['./appointment-view.component.css']
})
export class AppointmentViewComponent implements AfterViewInit {

  appointments: Appointment[] = [];

  displayedColumns: string[] = ['id', 'doctor', 'doctorCrm',  'patient', 'roomNumber', 'date', 'action'];
  dataSource = new MatTableDataSource<Appointment>(this.appointments);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: AppointmentService) {}

  ngAfterViewInit() {
    this.getAll();
  }

  getAll(): void {
      this.service.getAll().subscribe((res: Appointment[]) => {
        console.log(res);

      this.appointments = res;
      this.dataSource = new MatTableDataSource<Appointment>(this.appointments);
      this.dataSource.paginator = this.paginator;
    });
  }
}
