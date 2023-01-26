import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Room } from '../model/room.model';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements AfterViewInit {

  rooms: Room[] = [];

  displayedColumns: string[] = ['id', 'room', 'action'];
  dataSource = new MatTableDataSource<Room>(this.rooms);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: RoomService) {}


  ngAfterViewInit() {
    this.getAll();
  }

  getAll(): void {
      this.service.getAll().subscribe((res: Room[]) => {
      this.rooms = res;
      this.dataSource = new MatTableDataSource<Room>(this.rooms);
      this.dataSource.paginator = this.paginator;
    });
  }

}
