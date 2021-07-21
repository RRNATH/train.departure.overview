import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_SERVICE_TOKEN, CONFIG_SERVICE_TOKEN, IApiService, IConfigService } from 'src/app/core-module';
import { Departure } from '../model/departure';
import { Station } from '../model/station';
import { IDepartureService } from './departure.service.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartureService implements IDepartureService {

  private baseUrl = this.configService.getBaseUrl();
  
  constructor(  @Inject(CONFIG_SERVICE_TOKEN) private configService: IConfigService,
  @Inject(API_SERVICE_TOKEN) private apiService: IApiService) { }

  getStations(): Observable<Station[]> {
    return this.apiService.get(this.baseUrl + 'stations').pipe(
      map(response => {
        return response as Station[]})
    );
  }
  getTrainDepartures(code: string): Observable<Departure[]> {
    return this.apiService.get(this.baseUrl + 'departures/' + code).pipe(
      map(response => {
        return response as Departure[]})
    );
  }
}
