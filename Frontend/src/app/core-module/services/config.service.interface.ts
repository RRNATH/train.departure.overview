import { InjectionToken } from '@angular/core';

export interface IConfigService {
    getBaseUrl(): string;
}


export const CONFIG_SERVICE_TOKEN = new InjectionToken<IConfigService>('ConfigService');