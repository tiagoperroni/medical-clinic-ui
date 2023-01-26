import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentService } from 'src/app/appointment/appointment.service';
import { Appointment } from 'src/app/appointment/model/appointment.model';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements AfterViewInit {

  appointments: Appointment[] = [];

  displayedColumns: string[] = ['id', 'doctor', 'doctorCrm',  'patient', 'roomNumber', 'date'];
  dataSource = new MatTableDataSource<Appointment>(this.appointments);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: AppointmentService) {}

  ngAfterViewInit() {
    this.getAll();
  }

  getAll(): void {
      this.service.getAll().subscribe((res: Appointment[]) => {

      this.appointments = res;
      this.dataSource = new MatTableDataSource<Appointment>(this.appointments);
      this.dataSource.paginator = this.paginator;
    });
  }

}
