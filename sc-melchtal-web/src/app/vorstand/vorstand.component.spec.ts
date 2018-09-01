import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VorstandComponent} from './vorstand.component';

describe('VorstandComponent', () => {
  let component: VorstandComponent;
  let fixture: ComponentFixture<VorstandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VorstandComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VorstandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
