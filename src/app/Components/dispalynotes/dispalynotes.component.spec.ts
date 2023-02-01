import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispalynotesComponent } from './dispalynotes.component';

describe('DispalynotesComponent', () => {
  let component: DispalynotesComponent;
  let fixture: ComponentFixture<DispalynotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispalynotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispalynotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
