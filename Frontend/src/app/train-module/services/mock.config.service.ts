import { Injectable } from '@angular/core';
import { IConfigService } from 'src/app/core-module';

@Injectable({
  providedIn: 'root'
})
export class MockConfigService implements IConfigService {

  constructor() { }
  getBaseUrl(): string {
    return '';
  }
}
