import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Employee } from "../models/Employee";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emp: Employee[] = [];

  constructor(private http: Http) { }

  ngOnInit() {
  }

}
