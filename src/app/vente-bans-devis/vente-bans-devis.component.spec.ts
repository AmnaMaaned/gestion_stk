import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteBansDevisComponent } from './vente-bans-devis.component';

describe('VenteBansDevisComponent', () => {
  let component: VenteBansDevisComponent;
  let fixture: ComponentFixture<VenteBansDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteBansDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteBansDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
