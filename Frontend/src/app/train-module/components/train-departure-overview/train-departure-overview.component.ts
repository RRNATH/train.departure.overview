import { AfterViewInit, Inject, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { DEPARTURE_SERVICE_TOKEN, IDepartureService } from '../../services/departure.service.interface';
import { Departure } from '../../model/departure';

@Component({
  selector: 'app-train-departure-overview',
  templateUrl: './train-departure-overview.component.html',
  styleUrls: ['./train-departure-overview.component.scss']
})

export class TrainDepartureOverviewComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['departureTime', 'direction', 'platform', 'trainType'];
  departurOverview : MatTableDataSource<Departure>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    @Inject(DEPARTURE_SERVICE_TOKEN) private departureService: IDepartureService
  ) {
    this.departurOverview = new MatTableDataSource<Departure>([]);
   }

  ngAfterViewInit(): void {
    this.departurOverview.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

  onStationChange(staionCode: string){
    this.departurOverview.data = [];
    this.departureService.getTrainDepartures(staionCode).subscribe(
      (data) => {
        this.departurOverview.data = data;
      }
    )

  }

}
