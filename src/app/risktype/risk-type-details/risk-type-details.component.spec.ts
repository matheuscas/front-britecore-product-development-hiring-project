import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskTypeDetailsComponent } from './risk-type-details.component';

describe('RiskTypeDetailsComponent', () => {
  let component: RiskTypeDetailsComponent;
  let fixture: ComponentFixture<RiskTypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskTypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
