import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteComptoireComponent } from './vente-comptoire.component';

describe('VenteComptoireComponent', () => {
  let component: VenteComptoireComponent;
  let fixture: ComponentFixture<VenteComptoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteComptoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteComptoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
