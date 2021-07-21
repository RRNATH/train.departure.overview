import { TestBed } from '@angular/core/testing';
import { NOTIFICATION_SERVICE_TOKEN } from 'src/app/notification-module';
import { HttpErrorHandlerService } from './http.error.handler.service';
import { MockNotificationService } from './mock.notification.service';

describe('Http.Error.HandlerService', () => {
  let service: HttpErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ {provide : NOTIFICATION_SERVICE_TOKEN, useClass : MockNotificationService}]
    });
    service = TestBed.inject(HttpErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
