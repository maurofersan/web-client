import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedContractsComponent } from './shared-contracts.component';

describe('SharedContractsComponent', () => {
  let component: SharedContractsComponent;
  let fixture: ComponentFixture<SharedContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedContractsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
