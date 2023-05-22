import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteAvoirComponent } from './vente-avoir.component';

describe('VenteAvoirComponent', () => {
  let component: VenteAvoirComponent;
  let fixture: ComponentFixture<VenteAvoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteAvoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteAvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
