import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDeleteComponent } from './doctor/doctor-delete/doctor-delete.component';
import { DoctorSaveComponent } from './doctor/doctor-save/doctor-save.component';
import { DoctorUpdateComponent } from './doctor/doctor-update/doctor-update.component';
import { DoctorViewComponent } from './doctor/doctor-view/doctor-view.component';

const routes: Routes = [
  { path: 'doctor', component: DoctorViewComponent },
  { path: 'doctor/save', component: DoctorSaveComponent },
  { path: 'doctor/update/:id', component: DoctorUpdateComponent },
  { path: 'doctor/delete/:id', component: DoctorDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
