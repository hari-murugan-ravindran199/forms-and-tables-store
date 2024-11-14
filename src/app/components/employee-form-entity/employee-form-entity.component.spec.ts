import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormEntityComponent } from '../employee-form-entity.component';

describe('EmployeeFormEntityComponent', () => {
  let component: EmployeeFormEntityComponent;
  let fixture: ComponentFixture<EmployeeFormEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFormEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
