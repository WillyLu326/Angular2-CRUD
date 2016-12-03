import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Employee } from "../models/Employee";

import { HttpService } from '../services/httpService';
import { EmpService } from '../services/empService';

import { Address } from "../models/Address";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  emp: Employee;

  constructor(private httpService: HttpService,
              private empService: EmpService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.emp = this.empService.getEmployee();
  }

  ngOnInit() {
  }

  onUpdate(city: string, state: string, age: number) {
    const name = this.activatedRoute.snapshot.params['name'];

    const body = new Employee(name, new Address(city, state), age);
    this.httpService.updateData(body, name)
      .subscribe( (data: Employee) => {
        console.log(data);
        this.router.navigate(['']);
      } );
  }


}
