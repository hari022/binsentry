import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateconsumptionComponent } from './estimateconsumption.component';

describe('EstimateconsumptionComponent', () => {
  let component: EstimateconsumptionComponent;
  let fixture: ComponentFixture<EstimateconsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateconsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateconsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
