import { createReducer, on } from '@ngrx/store';
import { addEmployee, updateEmployee, deleteEmployee } from './employee-form.actions';
import { Employee } from './employee-form.model';

export interface EmployeeState {
  employees: Employee[];
}

export const initialState: EmployeeState = {
  employees: [],
};

export const employeeReducer = createReducer(
  initialState,
  on(addEmployee, (state, { employee }) => ({
    ...state,
    employees: [...state.employees, { ...employee, id: state.employees.length + 1 }]
  })),
  on(updateEmployee, (state, { employee }) => ({
    ...state,
    employees: state.employees.map(emp => emp.id === employee.id ? employee : emp)
  })),
  on(deleteEmployee, (state, { employee }) => ({
    ...state,
    employees : state.employees.filter(e => e.id !== employee.id)
  }))
);
