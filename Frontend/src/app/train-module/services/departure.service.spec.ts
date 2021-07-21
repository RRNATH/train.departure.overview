import { TestBed } from '@angular/core/testing';
import { API_SERVICE_TOKEN, CONFIG_SERVICE_TOKEN } from 'src/app/core-module';
import { DepartureService } from './departure.service';
import { MockApiService } from './mock.api.service';
import { MockConfigService } from './mock.config.service';

describe('DepartureService', () => {
  let service: DepartureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: CONFIG_SERVICE_TOKEN, useClass: MockConfigService },
        { provide: API_SERVICE_TOKEN, useClass: MockApiService },
      ]
    });
    service = TestBed.inject(DepartureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
