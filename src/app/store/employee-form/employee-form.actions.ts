import { createAction, props } from '@ngrx/store';
import { Employee } from './employee-form.model';

export const addEmployee = createAction('[Employee] Add Employee', props<{ employee: Employee }>());
export const updateEmployee = createAction('[Employee] Update Employee', props<{ employee: Employee }>());
export const deleteEmployee = createAction('[Employee] Delete Employee', props<{ employee: Employee }>());