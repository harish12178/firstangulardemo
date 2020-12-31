import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Payments } from '../shared/Payments';
import { Invoices } from '../shared/Invoices';


@Injectable({
  providedIn: 'root'
})
export class InvoicePaymentsServiceService {

  private server_address = "http://192.168.0.25:7010";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAllPayments(): Observable<Payments[]> {
    return this.httpClient.get<Payments[]>(this.server_address + '/reportapi/PaymentReport/GetAllPayments/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getAllInvoices(): Observable<Invoices[]> {
    return this.httpClient.get<Invoices[]>(this.server_address + '/reportapi/InvoiceReport/GetAllInvoices/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  createInvoice(invoice: Invoices[]): Observable<Invoices[]> {
    return this.httpClient.post<Invoices[]>(this.server_address + '/reportapi/InvoiceReport/CreateInvoices', JSON.stringify(invoice),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  createPayment(payment: Payments[]): Observable<Payments[]> {
    return this.httpClient.post<Payments[]>(this.server_address + '/reportapi/PaymentReport/CreatePayments',JSON.stringify(payment),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  getPaymentByFromDate(fdate): Observable<Payments> {
    return this.httpClient.get<Payments>(this.server_address + '/reportapi/PaymentReport/GetFilteredPayments?FromDate=' + fdate)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getPaymentByToDate(tdate): Observable<Payments> {
    return this.httpClient.get<Payments>(this.server_address + '/reportapi/PaymentReport/GetFilteredPayments?ToDate=' + tdate)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getPaymentByDate(fdate,tdate): Observable<Payments> {
    return this.httpClient.get<Payments>(this.server_address + '/reportapi/PaymentReport/GetFilteredPayments?FromDate=' + fdate+'&ToDate='+tdate)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getInvoiceByFromDate(fdate): Observable<Invoices> {
    return this.httpClient.get<Invoices>(this.server_address + '/reportapi/InvoiceReport/GetFilteredInvoices?FromDate=' + fdate)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getInvoicetByToDate(tdate): Observable<Invoices> {
    return this.httpClient.get<Invoices>(this.server_address + '/reportapi/InvoiceReport/GetFilteredInvoices?ToDate=' + tdate)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getInvoiceByDate(fdate,tdate): Observable<Invoices> {
    return this.httpClient.get<Invoices>(this.server_address + '/reportapi/InvoiceReport/GetFilteredInvoices?FromDate=' + fdate+'&ToDate='+tdate)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  

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
