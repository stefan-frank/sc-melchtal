import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GallerieDetailComponent} from './gallerie-detail.component';

describe('GallerieDetailComponent', () => {
  let component: GallerieDetailComponent;
  let fixture: ComponentFixture<GallerieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GallerieDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
