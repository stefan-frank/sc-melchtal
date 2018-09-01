import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OberwendComponent} from './oberwend.component';

describe('OberwendComponent', () => {
  let component: OberwendComponent;
  let fixture: ComponentFixture<OberwendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OberwendComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OberwendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
