import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState } from '../employee-form/employee-form.reducer';

export const selectEmployeeState = createFeatureSelector<EmployeeState>('employee');

export const selectAllEmployees = createSelector(
  selectEmployeeState,
  (state: EmployeeState) => state.employees
);
