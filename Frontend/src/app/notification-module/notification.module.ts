import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { MaterialModule } from '../material-module';
import { NOTIFICATION_SERVICE_TOKEN } from './services/notification.service.interface';
import { NotificationService } from './services/notification.service';



@NgModule({
  providers:[
    {provide: NOTIFICATION_SERVICE_TOKEN, useClass : NotificationService},
  ],
  declarations: [
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  entryComponents: [
    ErrorMessageComponent
  ],
})
export class NotificationModule { }
