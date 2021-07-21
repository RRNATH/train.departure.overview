import { HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { INotificationService, NOTIFICATION_SERVICE_TOKEN } from 'src/app/notification-module';
import { IHttpErrorHandlerService } from './http.error.handler.service.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService implements IHttpErrorHandlerService{

  constructor(
    @Inject(NOTIFICATION_SERVICE_TOKEN) private notificationService: INotificationService,
  ) { }

  handleError(error: HttpErrorResponse): Observable<any> {  
    switch (error.status) {
      case 400: // bad request
      case 404: // not found
      case 409: // conflict
        this.notificationService.showErrorInDialog(`Something went wrong, please try again later.`)
        break;
      case 401: // unauthorized
      case 403: // forbidden
      this.notificationService.showErrorInDialog(
        `You are not authorized.
         please contact service desk`
      );
        break;
      case 500:
        this.notificationService.showErrorInDialog(
          `Internal Server Error. Please try again later.
          If you encounter this problem multiple times, please contact service desk`
        );

        break;
      case 0:
        // Network connection error.
        this.notificationService.showErrorInDialog(
          `Remote server is not accessible at this moment.
          Please check your network connection and the accessibility of remote server.`
        );
        break;
    }

    return of();
  }
}

