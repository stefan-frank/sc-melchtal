import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { vorstandsmitgliedComponent } from './vorstandsmitglied.component';

describe('vorstandsmitgliedComponent', () => {
  let component: vorstandsmitgliedComponent;
  let fixture: ComponentFixture<vorstandsmitgliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ vorstandsmitgliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(vorstandsmitgliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
