import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide: MatDialog , useValue: {}}]
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
