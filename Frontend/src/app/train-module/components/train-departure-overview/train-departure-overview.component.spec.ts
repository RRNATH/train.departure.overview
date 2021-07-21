import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { API_SERVICE_TOKEN, CONFIG_SERVICE_TOKEN } from 'src/app/core-module';
import { MaterialModule } from 'src/app/material-module';
import { DEPARTURE_SERVICE_TOKEN } from '../..';
import { MockApiService } from '../../services/mock.api.service';
import { MockConfigService } from '../../services/mock.config.service';
import { MockDepartureService } from '../../services/mock.departure.service';
import { StationSelectorComponent } from '../station-selector/station-selector.component';
import { TrainDepartureOverviewComponent } from './train-departure-overview.component';

describe('TrainOverviewComponent', () => {
  let component: TrainDepartureOverviewComponent;
  let fixture: ComponentFixture<TrainDepartureOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[
        { provide: CONFIG_SERVICE_TOKEN, useClass: MockConfigService },
        { provide: API_SERVICE_TOKEN, useClass: MockApiService },
        {provide: DEPARTURE_SERVICE_TOKEN, useClass : MockDepartureService}
      ],
      declarations: [ StationSelectorComponent, TrainDepartureOverviewComponent ],
      imports: [MaterialModule, BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainDepartureOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle station change event', async() => {
    spyOn(component, 'onStationChange');
    const selectorElememt = fixture.debugElement.query(By.css('.selector'));
    selectorElememt.triggerEventHandler('selectStaionEvent', {});
    fixture.detectChanges();
    expect(component.onStationChange).toHaveBeenCalled(); 
  });
});
