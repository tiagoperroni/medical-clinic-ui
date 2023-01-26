import { AppointmentDTO } from './model/appointment.model.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from './model/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl: string = environment.baseUrl + '/appointments';

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  public getAll(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.baseUrl);
  }

  public getById(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.baseUrl}/${id}`);
  }

  public save(appointmentDTO: AppointmentDTO): Observable<Appointment> {
    return this.http.post<Appointment>(this.baseUrl, appointmentDTO);
  }

  public update(id: number, appointmentDTO: AppointmentDTO): Observable<Appointment> {
    return this.http.put<Appointment>(`${this.baseUrl}/${id}`, appointmentDTO);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  message(msg: string): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000
    });
  }

}
