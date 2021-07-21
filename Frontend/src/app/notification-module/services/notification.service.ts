import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { ErrorMessageComponent } from '../components/error-message/error-message.component';
import { INotificationService } from './notification.service.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService implements INotificationService {

  constructor(
    private dialog: MatDialog,
  ) { }

  showErrorInDialog(errorMessage: string) {
    let title = 'Error' as string;
    let message = errorMessage;

    const dialogRef = this.dialog.open(ErrorMessageComponent,
      {data: {title: title, message: message}}
    );

    dialogRef.afterClosed()
    .pipe(take(1))
    .subscribe(val => {
      console.log(`dialog is closed. return value: ${JSON.stringify(val)}`);
    });
  }
}
