import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeurCategorieComponent } from './serveur-categorie.component';

describe('ServeurCategorieComponent', () => {
  let component: ServeurCategorieComponent;
  let fixture: ComponentFixture<ServeurCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServeurCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeurCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
