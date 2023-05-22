import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteBansCommandeComponent } from './vente-bans-commande.component';

describe('VenteBansCommandeComponent', () => {
  let component: VenteBansCommandeComponent;
  let fixture: ComponentFixture<VenteBansCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteBansCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteBansCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
