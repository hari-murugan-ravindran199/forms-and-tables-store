import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Employee } from './employee-form-entity.model';
import { loadEmployeesSuccess, addEmployee, updateEmployee, deleteEmployee } from './employee-form-entity.actions';

// Set up the Entity adapter
export const employeeAdapter = createEntityAdapter<Employee>();

export interface EmployeeState extends EntityState<Employee> {}

export const initialState: EmployeeState = employeeAdapter.getInitialState();

export const employeeReducer = createReducer(
  initialState,
  on(loadEmployeesSuccess, (state, { employees }) => employeeAdapter.setAll(employees, state)),
  on(addEmployee, (state, { employee }) => employeeAdapter.addOne(employee, state)),
  on(updateEmployee, (state, { employee }) => employeeAdapter.updateOne({ id: employee.id, changes: employee }, state)),
  on(deleteEmployee, (state, { id }) => employeeAdapter.removeOne(id, state))
);
