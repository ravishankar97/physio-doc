import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdAppointmentComponent } from './pd-appointment.component';

describe('PdAppointmentComponent', () => {
  let component: PdAppointmentComponent;
  let fixture: ComponentFixture<PdAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PdAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
