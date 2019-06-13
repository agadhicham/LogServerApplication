import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AideGeneraleComponent } from './aide-generale.component';

describe('AideGeneraleComponent', () => {
  let component: AideGeneraleComponent;
  let fixture: ComponentFixture<AideGeneraleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AideGeneraleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AideGeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
