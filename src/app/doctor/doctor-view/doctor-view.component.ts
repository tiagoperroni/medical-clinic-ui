import { MatPaginator } from '@angular/material/paginator';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../model/doctor.model';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.css']
})
export class DoctorViewComponent implements AfterViewInit {

  doctors: Doctor[] = [];

  displayedColumns: string[] = ['id', 'name', 'crm', 'registerDate', 'action'];
  dataSource = new MatTableDataSource<Doctor>(this.doctors);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: DoctorService) {}

  ngAfterViewInit() {
    this.getAll();
  }

  getAll(): void {
      this.service.getAll().subscribe((res: Doctor[]) => {
      this.doctors = res;
      this.dataSource = new MatTableDataSource<Doctor>(this.doctors);
      this.dataSource.paginator = this.paginator;
    });
  }

}

