import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IConfigService } from './config.service.interface';

@Injectable({
  providedIn: 'root'
})

export class ConfigService implements IConfigService{

  constructor() { }
  getBaseUrl(): string {
    return environment.baseUrl;;
  }
}
