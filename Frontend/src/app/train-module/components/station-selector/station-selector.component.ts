import { Output, EventEmitter } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Station } from '../../model/station';
import { DEPARTURE_SERVICE_TOKEN, IDepartureService } from '../../services/departure.service.interface';


@Component({
  selector: 'app-station-selector',
  templateUrl: './station-selector.component.html',
  styleUrls: ['./station-selector.component.scss']
})
export class StationSelectorComponent implements OnInit {

  constructor(
    @Inject(DEPARTURE_SERVICE_TOKEN) private departurService: IDepartureService
  ) {}

  myControl = new FormControl();
  options: Station[] = [];
  filteredOptions: Observable<Station[]> = of();
  @Output() selectStaionEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.departurService.getStations().subscribe(
      (data) => 
      {
        this.options = data;
      }
    );
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value))
      );
  }

  onStationSelect(code: string) {
    this.selectStaionEvent.emit(code);
  }

  private filter(value: string) : Station[]{
    const filterValue = value.toLocaleLowerCase();
    return this.options?.filter(option => option.name.toLocaleLowerCase().includes(filterValue));
  }
}

