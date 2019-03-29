import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauFichierComponent } from './nouveau-fichier.component';

describe('NouveauFichierComponent', () => {
  let component: NouveauFichierComponent;
  let fixture: ComponentFixture<NouveauFichierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauFichierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
