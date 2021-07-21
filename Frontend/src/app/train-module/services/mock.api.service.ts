import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { IApiService } from 'src/app/core-module';
import { StationSelectorComponent } from '../components/station-selector/station-selector.component';

@Injectable({
  providedIn: 'root'
})
export class MockApiService implements IApiService {

  constructor() { }
  get(url: string): Observable<any> {
    return new Observable<any>(observer => {
      observer.next();
      observer.complete();
    })
  }
}
