import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';


export interface IApiService {
    get(url : string) : Observable<any>;
}

export const API_SERVICE_TOKEN = new InjectionToken<IApiService>('ApiService');