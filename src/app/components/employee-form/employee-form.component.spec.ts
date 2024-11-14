import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeFormComponent } from './employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Employee } from '../../store/employee-form/employee-form.model';

describe('EmployeeFormComponent', () => {
  let component: EmployeeFormComponent;
  let fixture: ComponentFixture<EmployeeFormComponent>;

  const mockEmployees: Employee[] = [
    { id: 1, name: 'Michael Jackson', age: 30, empid: 'E12345', designation: 'Software Developer', address: '123 Street' },
    { id: 2, name: 'MS Dhoni', age: 25, empid: 'E12346', designation: 'Devops', address: '456 Road' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeFormComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule
      ],
      providers: [
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should populate form fields when editing an employee', () => {
    const employeeToEdit = mockEmployees[0];
    component.editEmployee(employeeToEdit);

    expect(component.employeeDetails.value).toEqual({
      id: employeeToEdit.id,
      name: employeeToEdit.name,
      age: employeeToEdit.age,
      empid: employeeToEdit.empid,
      designation: employeeToEdit.designation,
      address: employeeToEdit.address,
    });
    expect(component.isEditMode).toBe(true);
  });

  

  
});
