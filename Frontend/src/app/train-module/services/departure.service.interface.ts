import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Departure } from '../model/departure';
import { Station } from '../model/station';

export interface IDepartureService {
    getStations() : Observable<Station[]>;
    getTrainDepartures(code : string) : Observable<Departure[]>;
}

export const DEPARTURE_SERVICE_TOKEN = new InjectionToken<IDepartureService>('DepartureService');
