import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONFIG_SERVICE_TOKEN, HTTP_ERROR_HANDLER_SERVICE_TOKEN } from '.';
import { ConfigService } from './services/config.service';
import { API_SERVICE_TOKEN } from './services/api.service.interface';
import { ApiService } from './services/api.service';
import { NotificationModule } from '../notification-module/notification.module';
import { HttpErrorHandlerService } from './services/http.error.handler.service';

@NgModule({
  providers:[
    {provide: CONFIG_SERVICE_TOKEN, useClass : ConfigService},
    {provide: API_SERVICE_TOKEN, useClass : ApiService},
    {provide: HTTP_ERROR_HANDLER_SERVICE_TOKEN, useClass : HttpErrorHandlerService}
  ],
  declarations: [],
  imports: [
    CommonModule,
    NotificationModule,
  ]
})
export class CoreModule { }
