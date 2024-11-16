import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Employee } from '../../store/employee-form-entity/employee-form-entity.model';
import { loadEmployeesSuccess,addEmployee, updateEmployee, deleteEmployee } from '../../store/employee-form-entity/employee-form-entity.actions';
import { Observable } from 'rxjs';
import { selectAllEmployees } from '../../store/employee-form-entity/employee-from-entity.selectors';
import { naturalNumberValidator } from '../../validators/employee-form/employee-form.validators';
import { EmployeeFormEntityService } from '../../store/employee-form-entity/employee-from-entity.service';

@Component({
  selector: 'app-employee-form-entity',
  templateUrl: './employee-form-entity.component.html',
  styleUrls: ['./employee-form-entity.component.css']
})
export class EmployeeFormEntityComponent implements OnInit {
  employees$: Observable<Employee[]>;
  isEditMode = false;
  displayedColumns = ['name', 'age', 'empid', 'designation', 'address', 'actions'];


  employeeDetails = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(99), naturalNumberValidator()]),
    empid: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]),
    designation: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]),
    address: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(200)])
  });

  constructor(private store: Store, private employeeService: EmployeeFormEntityService) {
    this.employees$ = this.store.select(selectAllEmployees);
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.store.dispatch(loadEmployeesSuccess({ employees }));
    });
  }

  onSubmit(): void {
    if (this.employeeDetails.valid) {
      const employee: Employee = this.employeeDetails.value;
      if (this.isEditMode) {
        this.store.dispatch(updateEmployee({ employee }));
      } else {
          this.store.dispatch(addEmployee({ employee }));
      }
      this.employeeDetails.reset();
      this.isEditMode = false;
      
      Object.keys(this.employeeDetails.controls).forEach(key => {
          this.employeeDetails.controls[key].setErrors(null)
          });
    }else {
      console.log('Invalid form data');
    }
  }

  editEmployee(employee: Employee): void {
    this.employeeDetails.setValue(employee);
    this.isEditMode = true;
  }

  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee record?')) {
      this.store.dispatch(deleteEmployee({ id }));
    }
    
  }
}

