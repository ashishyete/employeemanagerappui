import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = environment.apiBaseUrl+"/employee";

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}/addEmployee`, employee);
  }

  public updateEmployee(employee: Employee, id: number): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/updateEmployee/${id}`, employee);
  }

  public deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteEmployee/${id}`);
  }


}
