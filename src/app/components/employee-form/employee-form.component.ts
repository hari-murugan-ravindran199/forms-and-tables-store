import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { naturalNumberValidator } from '../../validators/employee-form/employee-form.validators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from '../../store/employee-form/employee-form.model';
import { addEmployee, updateEmployee, deleteEmployee } from '../../store/employee-form/employee-form.actions';
import { selectAllEmployees } from '../../store/employee-form/employee-form.selectors';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent{
  
  isEditMode = false;
  displayedColumns = ['name', 'age', 'empid', 'designation', 'address', 'actions'];
  
  employees$: Observable<Employee[]>;

  constructor(private store: Store) {
    this.employees$ = this.store.select(selectAllEmployees);
  }

  employeeDetails = new FormGroup({ 
    id: new FormControl(null),
    name: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(200)]),
    age: new FormControl('',[Validators.required,Validators.min(18),Validators.max(99),naturalNumberValidator()]),
    empid: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(7)]),
    designation: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(200)]),
    address: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(200)]),
    
  });
   

  onSubmit() {
    if (this.employeeDetails.valid) {
      const employee: Employee = this.employeeDetails.value;
  
      if (this.isEditMode) {
        this.store.dispatch(updateEmployee({ employee }));

      } else {
          this.store.dispatch(addEmployee({ employee }));
      }
  
      this.employeeDetails.reset();
      this.isEditMode = false;
  
    } else {
      console.log('Invalid form data');
    }
  }
  

  editEmployee(employee: Employee) {
  this.employeeDetails.setValue({
    id: employee.id,
    name: employee.name,
    age: employee.age,
    empid: employee.empid,
    designation: employee.designation,
    address: employee.address
  });

  // Set edit mode to true
  this.isEditMode = true;
  }
  
  deleteEmployee(employee: Employee) {
    if (confirm('Are you sure you want to delete this employee record?')) {
      this.store.dispatch(deleteEmployee({ employee }));
    }
  }
  

}

