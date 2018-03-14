import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterbinComponent } from './registerbin.component';

describe('RegisterbinComponent', () => {
  let component: RegisterbinComponent;
  let fixture: ComponentFixture<RegisterbinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterbinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterbinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
