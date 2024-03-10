import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdAboutMeComponent } from './pd-about-me.component';

describe('PdAboutMeComponent', () => {
  let component: PdAboutMeComponent;
  let fixture: ComponentFixture<PdAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PdAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
