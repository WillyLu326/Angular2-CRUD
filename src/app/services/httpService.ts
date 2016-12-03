/**
 * Created by zhenglu on 12/3/16.
 */
import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import "rxjs/RX";

import { Observable } from "rxjs";
import { Employee } from "../models/Employee";

@Injectable()
export class HttpService {

  url: string = 'http://localhost:3000/users';

  constructor(private http: Http) {}

  getAllData(): Observable<Employee[]> {
    return this.http.get(this.url).map( (res: Response) => res.json() );
  }

  addData(emp: Employee): Observable<Employee> {
    const body = JSON.stringify(emp);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.url, body, { headers: headers })
              .map( (res: Response) => res.json() );
  }
}
