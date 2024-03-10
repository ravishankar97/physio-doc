import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdToolbarComponent } from './pd-toolbar.component';

describe('PdToolbarComponent', () => {
  let component: PdToolbarComponent;
  let fixture: ComponentFixture<PdToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
