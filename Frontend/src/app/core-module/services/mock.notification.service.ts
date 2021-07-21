import { Injectable } from '@angular/core';
import { INotificationService } from 'src/app/notification-module';

@Injectable({
  providedIn: 'root'
})
export class MockNotificationService implements INotificationService {

  constructor() { }
  showErrorInDialog(errorMessage: string): void {
    console.log(errorMessage);
  }
}
