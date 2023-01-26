import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from '../model/patient.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements AfterViewInit {

  patient: Patient[] = [];

  displayedColumns: string[] = ['id', 'name', 'cpf', 'age', 'registerDate', 'action'];
  dataSource = new MatTableDataSource<Patient>(this.patient);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: PatientService) {}


  ngAfterViewInit() {
    this.getAll();
  }

  getAll(): void {
      this.service.getAll().subscribe((res: Patient[]) => {
      this.patient = res;
      this.dataSource = new MatTableDataSource<Patient>(this.patient);
      this.dataSource.paginator = this.paginator;
    });
  }

}
