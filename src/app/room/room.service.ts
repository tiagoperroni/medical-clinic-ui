import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from './model/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl: string = environment.baseUrl + '/rooms';

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  public getAll(): Observable<Room[]> {
    return this.http.get<Room[]>(this.baseUrl);
  }

  public getById(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.baseUrl}/${id}`);
  }

  public save(room: Room): Observable<Room> {
    return this.http.post<Room>(this.baseUrl, room);
  }

  public update(id: number, Room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.baseUrl}/${id}`, Room);
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
