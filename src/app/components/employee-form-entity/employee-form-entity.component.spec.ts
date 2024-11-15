import { addEmployee, updateEmployee, deleteEmployee } from '../../store/employee-form-entity/employee-form-entity.actions';
import { Employee } from '../../store/employee-form-entity/employee-form-entity.model';

const employee: Employee = {
  id: 1,
  name: 'MS Dhoni',
  age: 30,
  empid: 'EMP123',
  designation: 'Software Engineer',
  address: '123 Main St'
};

describe('Employee Actions', () => {
  it('should create an addEmployee action', () => {
    const action = addEmployee({ employee });
    expect(action.type).toBe('[Employee] Add Employee');
    expect(action.employee).toEqual(employee);
  });

  it('should create an updateEmployee action', () => {
    const action = updateEmployee({ employee });
    expect(action.type).toBe('[Employee] Update Employee');
    expect(action.employee).toEqual(employee);
  });

  it('should create a deleteEmployee action', () => {
    const action = deleteEmployee({ id: 1 });
    expect(action.type).toBe('[Employee] Delete Employee');
    expect(action.id).toBe(1);
  });
});



