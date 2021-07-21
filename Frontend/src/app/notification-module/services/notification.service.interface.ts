import { InjectionToken } from "@angular/core";

export interface INotificationService {
    
    showErrorInDialog(errorMessage: string) : void;
}

export const NOTIFICATION_SERVICE_TOKEN = new InjectionToken<INotificationService>('NotificationService');
