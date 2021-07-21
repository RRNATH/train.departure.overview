import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core-module/core.module';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DEPARTURE_SERVICE_TOKEN } from './services/departure.service.interface';
import { DepartureService } from './services/departure.service';
import { StationSelectorComponent } from './components/station-selector/station-selector.component';
import { TrainDepartureOverviewComponent } from './components/train-departure-overview/train-departure-overview.component';



@NgModule({
  providers:[
    {provide: DEPARTURE_SERVICE_TOKEN, useClass : DepartureService},
  ],
  declarations: [
    TrainDepartureOverviewComponent,
    StationSelectorComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TrainModule { }
