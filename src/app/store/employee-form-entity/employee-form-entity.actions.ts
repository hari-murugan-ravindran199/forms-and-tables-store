import { createAction, props } from '@ngrx/store';
import { Employee } from './employee-form-entity.model';

export const loadEmployeesSuccess = createAction('[Employee] Load Employees Success', props<{ employees: Employee[] }>());
export const addEmployee = createAction('[Employee] Add Employee', props<{ employee: Employee }>());
export const updateEmployee = createAction('[Employee] Update Employee', props<{ employee: Employee }>());
export const deleteEmployee = createAction('[Employee] Delete Employee', props<{ id: number }>());
