import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


import { RoomRoutingModule } from './room-routing.module';
import { RoomUpdateComponent } from './room-update/room-update.component';
import { RoomDeleteComponent } from './room-delete/room-delete.component';


@NgModule({
  declarations: [
    RoomUpdateComponent,
    RoomDeleteComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RoomModule { }
