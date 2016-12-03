import { Component, OnInit } from '@angular/core';

import { Employee } from "../models/Employee";

import { HttpService } from '../services/httpService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emps: Employee[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getAllData().subscribe( (data: Employee[]) => this.emps = data )
  }

}
