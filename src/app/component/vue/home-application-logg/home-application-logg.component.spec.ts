import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeApplicationLoggComponent } from './home-application-logg.component';

describe('HomeApplicationLoggComponent', () => {
  let component: HomeApplicationLoggComponent;
  let fixture: ComponentFixture<HomeApplicationLoggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeApplicationLoggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeApplicationLoggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
