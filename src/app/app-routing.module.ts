import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorSaveComponent } from './doctor/doctor-save/doctor-save.component';
import { DoctorViewComponent } from './doctor/doctor-view/doctor-view.component';

const routes: Routes = [
  { path: 'doctor', component: DoctorViewComponent },
  { path: 'doctor/save', component: DoctorSaveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
