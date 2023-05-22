import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteFacturesComponent } from './vente-factures.component';

describe('VenteFacturesComponent', () => {
  let component: VenteFacturesComponent;
  let fixture: ComponentFixture<VenteFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteFacturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
