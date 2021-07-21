import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { API_SERVICE_TOKEN, CONFIG_SERVICE_TOKEN } from 'src/app/core-module';
import { MaterialModule } from 'src/app/material-module';
import { DEPARTURE_SERVICE_TOKEN } from '../../services/departure.service.interface';
import { MockApiService } from '../../services/mock.api.service';
import { MockConfigService } from '../../services/mock.config.service';
import { MockDepartureService } from '../../services/mock.departure.service';

import { StationSelectorComponent } from './station-selector.component';

describe('StationSelectorComponent', () => {
  let component: StationSelectorComponent;
  let fixture: ComponentFixture<StationSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[
        { provide: CONFIG_SERVICE_TOKEN, useClass: MockConfigService },
        { provide: API_SERVICE_TOKEN, useClass: MockApiService },
        {provide: DEPARTURE_SERVICE_TOKEN, useClass : MockDepartureService}
      ],
      declarations: [ StationSelectorComponent ],
      imports: [MaterialModule, ReactiveFormsModule, FormsModule, BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should emit event on station change', async() =>{
    spyOn(component.selectStaionEvent, 'emit');
    const inputElement = fixture.debugElement.query(By.css('input'));
    inputElement.nativeElement.dispatchEvent(new Event('focusin'));
    inputElement.nativeElement.value = 'Den Haag'; 
    inputElement.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
     
    await fixture.whenStable();
    
    const matOptions = document.querySelectorAll('mat-option');
    expect(matOptions.length).toBe(2);

    const optionToClick = matOptions[0] as HTMLElement;
    optionToClick.click();
    fixture.detectChanges(); 
    expect(component.selectStaionEvent.emit).toHaveBeenCalledWith("GVC");
  })

});
