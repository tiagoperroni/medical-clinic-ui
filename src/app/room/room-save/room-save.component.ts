import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../model/room.model';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-save',
  templateUrl: './room-save.component.html',
  styleUrls: ['./room-save.component.css']
})
export class RoomSaveComponent implements OnInit {

  room: Room = new Room();

  constructor(private service: RoomService, private router: Router) {
  }

  ngOnInit(): void {
  }

  save(): void {
    this.service.save(this.room).subscribe((res: Room) => {
      this.router.navigate(['/room']);
      this.service.message('A sala foi salva com sucesso!');
    }, err => {
      this.service.message(err.error.message[0]);
      console.log(err);
    });
  }

}
