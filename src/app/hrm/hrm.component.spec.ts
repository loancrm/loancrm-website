import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmComponent } from './hrm.component';

describe('HrmComponent', () => {
  let component: HrmComponent;
  let fixture: ComponentFixture<HrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrmComponent]
    });
    fixture = TestBed.createComponent(HrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
