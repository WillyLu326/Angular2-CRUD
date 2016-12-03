import { Component, OnInit } from '@angular/core';

import { Employee } from '../models/Employee';

import { HttpService } from "../services/httpService";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  emps: Employee[] = [];
  emp: Employee;
  curr: number = 0;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getAllData()
      .subscribe( (data: Employee[]) => {
        this.emps = data;
        this.emp = this.emps[this.curr];
      });
  }

  doPrev() {
    this.curr--;
    this.emp = this.emps[this.curr];

  }

  doNext() {
    this.curr++;
    this.emp = this.emps[this.curr];
  }

}
