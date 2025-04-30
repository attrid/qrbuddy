import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanPage } from './scan.page';

describe('Tab1Page', () => {
  let component: ScanPage;
  let fixture: ComponentFixture<ScanPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
