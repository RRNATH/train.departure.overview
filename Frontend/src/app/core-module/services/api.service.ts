import { Inject, Injectable } from '@angular/core';
import { HTTP_ERROR_HANDLER_SERVICE_TOKEN, IHttpErrorHandlerService } from '..';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IApiService } from './api.service.interface';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements IApiService{

  constructor(private http: HttpClient,
    @Inject(HTTP_ERROR_HANDLER_SERVICE_TOKEN) private errorHandler: IHttpErrorHandlerService) { }

    get(url: string): Observable<any> {
      const httpOptions = this.getDefaultHttpOptionsForGet();
      return this.http.get(url, httpOptions).pipe(
        catchError((error) => this.errorHandler.handleError(error))
      );
    }

    private getDefaultHttpOptionsForGet() {
      const httpOptions = {
        headers: new HttpHeaders({
          Accept: 'application/json',

        })
      };
    
      return httpOptions;
    }
}
