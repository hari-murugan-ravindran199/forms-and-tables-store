import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Employee } from './employee-form-entity.model';
import { loadEmployeesSuccess, addEmployee, updateEmployee, deleteEmployee } from './employee-form-entity.actions';

export const employeeAdapter = createEntityAdapter<Employee>();

export interface EmployeeState extends EntityState<Employee> {}

export const initialState: EmployeeState = employeeAdapter.getInitialState();

export const employeeReducer = createReducer(
  initialState,
  on(loadEmployeesSuccess, (state, { employees }) => employeeAdapter.setAll(employees, state)),
  on(addEmployee, (state, { employee }) => {
    const newId = (state.ids.length > 0 ? Math.max(...(state.ids as number[])) : 0) + 1;
    return employeeAdapter.addOne({ ...employee, id: newId }, state);
  }),
  on(updateEmployee, (state, { employee }) => employeeAdapter.updateOne({ id: employee.id, changes: employee }, state)),
  on(deleteEmployee, (state, { id }) => employeeAdapter.removeOne(id, state))
);
