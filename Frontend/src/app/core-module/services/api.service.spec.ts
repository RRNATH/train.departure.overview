import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { HTTP_ERROR_HANDLER_SERVICE_TOKEN } from './http.error.handler.service.interface';
import { HttpErrorHandlerService } from './http.error.handler.service';
import { NOTIFICATION_SERVICE_TOKEN } from 'src/app/notification-module';
import { MockNotificationService } from './mock.notification.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock : HttpTestingController;
  let httpClient : HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide : NOTIFICATION_SERVICE_TOKEN, useClass : MockNotificationService},
        {provide : HTTP_ERROR_HANDLER_SERVICE_TOKEN, useClass : HttpErrorHandlerService}
      ],
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
