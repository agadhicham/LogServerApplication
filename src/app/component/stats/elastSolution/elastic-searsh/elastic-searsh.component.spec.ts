import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElasticSearshComponent } from './elastic-searsh.component';

describe('ElasticSearshComponent', () => {
  let component: ElasticSearshComponent;
  let fixture: ComponentFixture<ElasticSearshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElasticSearshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElasticSearshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
