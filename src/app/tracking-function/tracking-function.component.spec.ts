import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingFunctionComponent } from './tracking-function.component';

describe('TrackingFunctionComponent', () => {
  let component: TrackingFunctionComponent;
  let fixture: ComponentFixture<TrackingFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
