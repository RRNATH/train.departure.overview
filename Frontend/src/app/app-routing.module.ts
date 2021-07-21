import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainDepartureOverviewComponent } from './train-module/components/train-departure-overview/train-departure-overview.component';

const routes: Routes = [
  { path: '', component: TrainDepartureOverviewComponent },
  { path: 'overview', component: TrainDepartureOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
