import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectreadingComponent } from './collectreading.component';

describe('CollectreadingComponent', () => {
  let component: CollectreadingComponent;
  let fixture: ComponentFixture<CollectreadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectreadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
