import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../services/httpService';

import { Employee } from "../models/Employee";
import { Address } from '../models/Address';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private httpService: HttpService,
              private router: Router) { }

  ngOnInit() {
  }

  onAdd(name, city, state, age) {
    const emp = new Employee(name, new Address(city, state), age);
    this.httpService.addData(emp)
      .subscribe( (data: Employee) => {
        console.log(data);
        this.router.navigate(['']);
      } );
  }

}
