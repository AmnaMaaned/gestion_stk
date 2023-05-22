import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteBansLivraisonComponent } from './vente-bans-livraison.component';

describe('VenteBansLivraisonComponent', () => {
  let component: VenteBansLivraisonComponent;
  let fixture: ComponentFixture<VenteBansLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteBansLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteBansLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
