import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackButtonComponent } from './track-button.component';

describe('TrackButtonComponent', () => {
  let component: TrackButtonComponent;
  let fixture: ComponentFixture<TrackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
