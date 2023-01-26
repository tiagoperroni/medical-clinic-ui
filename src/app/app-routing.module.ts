import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DoctorViewComponent } from './doctor/doctor-view/doctor-view.component';

const routes: Routes = [
  { path: 'doctor', component: DoctorViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
