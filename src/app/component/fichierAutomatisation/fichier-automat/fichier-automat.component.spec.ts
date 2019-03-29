import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichierAutomatComponent } from './fichier-automat.component';

describe('FichierAutomatComponent', () => {
  let component: FichierAutomatComponent;
  let fixture: ComponentFixture<FichierAutomatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichierAutomatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichierAutomatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
