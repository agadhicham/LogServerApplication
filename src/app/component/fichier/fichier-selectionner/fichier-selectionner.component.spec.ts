import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichierSelectionnerComponent } from './fichier-selectionner.component';

describe('FichierSelectionnerComponent', () => {
  let component: FichierSelectionnerComponent;
  let fixture: ComponentFixture<FichierSelectionnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichierSelectionnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichierSelectionnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
