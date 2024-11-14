import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Employee } from '../../store/employee-form-entity/employee-form-entity.model';

interface EmployeeResponse {
  employees: Employee[];
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormEntityService {
  private dataUrl = '/assets/mock_api/db.json';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<EmployeeResponse>(this.dataUrl).pipe(
      map((data: EmployeeResponse) => {
        if (data && Array.isArray(data.employees)) {
          return data.employees;
        } else {
          console.error('Employees data not found or not an array');
          return [];
        }
      }),
      catchError(error => {
        console.error('Error fetching employees data:', error);
        return throwError(() => new Error('Error fetching employees data'));
      })
    );
  }
}
