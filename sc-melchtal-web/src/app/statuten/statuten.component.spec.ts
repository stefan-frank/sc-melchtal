import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutenComponent } from './statuten.component';

describe('StatutenComponent', () => {
  let component: StatutenComponent;
  let fixture: ComponentFixture<StatutenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatutenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatutenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
