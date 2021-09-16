import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCarComponent } from './step-car.component';

describe('StepCarComponent', () => {
  let component: StepCarComponent;
  let fixture: ComponentFixture<StepCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
