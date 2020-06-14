import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationFunctionComponent } from './transformation-function.component';

describe('TransformationFunctionComponent', () => {
  let component: TransformationFunctionComponent;
  let fixture: ComponentFixture<TransformationFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformationFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformationFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
