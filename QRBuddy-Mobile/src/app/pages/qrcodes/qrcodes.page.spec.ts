import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodesPage } from './qrcodes.page';

describe('Tab2Page', () => {
  let component: QrcodesPage;
  let fixture: ComponentFixture<QrcodesPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(QrcodesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
