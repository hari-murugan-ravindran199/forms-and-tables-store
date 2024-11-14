import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState, employeeAdapter } from './employee-form-entity.reducer';

export const selectEmployeeState = createFeatureSelector<EmployeeState>('employee');

const { selectAll, selectEntities } = employeeAdapter.getSelectors();

export const selectAllEmployees = createSelector(selectEmployeeState, selectAll);
export const selectEmployeeEntities = createSelector(selectEmployeeState, selectEntities);
