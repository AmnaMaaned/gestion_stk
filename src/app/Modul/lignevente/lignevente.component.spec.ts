import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneventeComponent } from './lignevente.component';

describe('LigneventeComponent', () => {
  let component: LigneventeComponent;
  let fixture: ComponentFixture<LigneventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigneventeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
