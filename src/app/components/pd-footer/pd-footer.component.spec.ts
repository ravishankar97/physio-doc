import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdFooterComponent } from './pd-footer.component';

describe('PdFooterComponent', () => {
  let component: PdFooterComponent;
  let fixture: ComponentFixture<PdFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
