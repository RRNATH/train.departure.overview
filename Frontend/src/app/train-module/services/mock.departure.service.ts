import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departure } from '../model/departure';
import { Station } from '../model/station';
import { IDepartureService } from './departure.service.interface';

@Injectable({
  providedIn: 'root'
})
export class MockDepartureService implements IDepartureService {

  constructor() { }
  getStations(): Observable<Station[]> {
    return new Observable<Station[]>(observer => {
      const stations = [{'name' : 'Den Haag', 'code' :'GVC'},{'name' : 'Leiden', 'code' :'LEDEN'}]
      observer.next(stations);
      observer.complete();
    })
  }
  getTrainDepartures(code: string): Observable<Departure[]> {
    return new Observable<Departure[]>(observer => {
      const departure = [{'departureTime' : '2021-07-19T21:24:00+0200', 'direction' :'Dordrecht','platform' : '10', 'trainType' : 'Sprinter'},
      {'departureTime' : '2021-07-19T21:25:00+0200', 'direction' :'Leiden','platform' : '11', 'trainType' : 'Intercity'}];
      observer.next(departure);
      observer.complete();
    })
  }
}
