import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCategComponent } from './ajout-categ.component';

describe('AjoutCategComponent', () => {
  let component: AjoutCategComponent;
  let fixture: ComponentFixture<AjoutCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCategComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
