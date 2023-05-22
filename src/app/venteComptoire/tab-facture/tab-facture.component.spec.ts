import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFactureComponent } from './tab-facture.component';

describe('TabFactureComponent', () => {
  let component: TabFactureComponent;
  let fixture: ComponentFixture<TabFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
