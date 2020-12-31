import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Employees } from './employees';

@Injectable({
  providedIn: 'root'
})
export class CurdService {

  private server_address = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  constructor(private httpClient:HttpClient) { }
  
  create(employee: Employees): Observable<Employees> {
    return this.httpClient.post<Employees>(this.server_address + '/employees/', JSON.stringify(employee), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  
  getAll(): Observable<Employees[]> {
    return this.httpClient.get<Employees[]>(this.server_address + '/employees/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  // getById(id): Observable<Employees> {
  //   return this.httpClient.get<Employees>(this.server_address + '/employees/' + id)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  // update(id, employee): Observable<Employees> {
  //   return this.httpClient.put<Employees>(this.server_address + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // } 

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}

