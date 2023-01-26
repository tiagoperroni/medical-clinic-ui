import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../model/room.model';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-delete',
  templateUrl: './room-delete.component.html',
  styleUrls: ['./room-delete.component.css']
})
export class RoomDeleteComponent implements OnInit {

  room: Room = new Room();

  id!: number;

  constructor(private service: RoomService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getById();
  }

  getById(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe((res) => {
      this.room = res;
    }, err => {
      this.service.message(err);
    });
  }

  delete(): void {
    this.service.delete(this.id).subscribe((res: any) => {
      this.router.navigate(['/room']);
      this.service.message('A Sala foi deletada com sucesso!');
    }, err => {
      this.service.message(err.error.message[0]);
      console.log(err);
    });
  }

}
