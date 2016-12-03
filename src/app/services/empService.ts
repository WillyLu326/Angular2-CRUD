/**
 * Created by zhenglu on 12/3/16.
 */
import { Injectable } from '@angular/core';

import { Employee } from '../models/Employee';

@Injectable()
export class EmpService {
  employee: Employee;

  setEmployee(emp: Employee): void {
    this.employee = emp;
  }

  getEmployee(): Employee {
    return this.employee;
  }
}
