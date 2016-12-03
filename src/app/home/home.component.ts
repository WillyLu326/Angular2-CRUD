import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from "../models/Employee";

import { HttpService } from '../services/httpService';
import { EmpService } from "../services/empService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emps: Employee[] = [];


  constructor(private httpService: HttpService,
              private empService: EmpService,
              private router: Router) {}

  ngOnInit() {
    this.httpService.getAllData()
      .subscribe( (data: Employee[]) => this.emps = data )
  }

  doUpdate(emp: Employee) {
    this.empService.setEmployee(emp);
  }

  doDelete(name: string) {
    this.httpService.deleteData(name)
      .subscribe( (data: Employee) => {
        console.log(data);
        this.router.navigate(['']);
      })
  }

}
