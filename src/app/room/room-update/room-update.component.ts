import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../model/room.model';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.css']
})
export class RoomUpdateComponent implements OnInit {

  room: Room = new Room();

  id!: number;

  constructor(private service: RoomService, private router: Router, private route: ActivatedRoute ) {
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

  update(): void {
    if (!this.verifyData(this.room)) {
      return
    }
    this.service.update(this.id, this.room).subscribe((res: Room) => {
      this.router.navigate(['/room']);
      this.service.message('Número de Sala atualizada com sucesso!');
    }, err => {
      this.service.message(err.error.message[0]);
      console.log(err);
    });
  }

  private verifyData(room: Room): boolean {
    if (room.roomNumber === null) {
      this.service.message('Verifique se todos os campos foram informados.');
      return false;
    }
    return true;
  }

}
