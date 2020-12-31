import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";
import { InvoicePaymentsServiceService } from '../services/invoice-payments-service.service';
import { MatTableDataSource } from '@angular/material/table';

import { Invoices } from '../shared/Invoices';
import { FormBuilder ,Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private router:Router,private titleService:Title,private service:InvoicePaymentsServiceService,private fb:FormBuilder,private datepipe:DatePipe) {this.titleService.setTitle("Invoice"); }

  displayedColumns:string[]=["ivno","ivdt","por","ivamt","pamt","date","status","doc"];
  dataSource:MatTableDataSource<any>;

  search_form=this.fb.group({
    iv_from_date:[null],
    iv_to_date:[null],
    po_number:[null],
    iv_number:[null],
    status:[null]
  })

  handle_search(){
    const po_number=this.search_form.get('po_number').value;
    const iv_number=this.search_form.get('iv_number').value;
    const status=this.search_form.get('status').value;
    this.dataSource.filterPredicate = (data: Invoices, filter: string) => {
      return data.Status == filter;
     };
    this.dataSource.filter=status;
    if(po_number!=null){
      this.dataSource.filterPredicate = (data: Invoices, filter: string) => {
        return data.PoReference == filter;
       };
      this.dataSource.filter=po_number;
    }
    if(iv_number!=null){
      this.dataSource.filterPredicate = (data: Invoices, filter: string) => {
        return data.InvoiceNo == filter;
       };
      this.dataSource.filter=iv_number;
    }
  }
  getbydate(){
    const iv_from_date=this.search_form.get('iv_from_date').value;
    const iv_to_date=this.search_form.get('iv_to_date').value;
    const formatted_fromdate=this.datepipe.transform(iv_from_date, 'yyyy-MM-dd');
    const formatted_todate=this.datepipe.transform(iv_to_date, 'yyyy-MM-dd');

    if(formatted_fromdate&&formatted_todate!=null){
      this.service.getInvoiceByDate(formatted_fromdate,formatted_todate).subscribe((data:any)=>{
        console.log(data);
        this.dataSource=new MatTableDataSource(data);
      })
    }
    else if(formatted_fromdate!=null){
      this.service.getInvoiceByFromDate(formatted_fromdate).subscribe((data:any)=>{
        console.log(data);
        this.dataSource=new MatTableDataSource(data); 
      })
    }
    else if(formatted_todate!=null){
      this.service.getInvoiceByFromDate(formatted_todate).subscribe((data:any)=>{
        console.log(data);
        this.dataSource=new MatTableDataSource(data);
      })
    }

  }

  ngOnInit(): void {
    this.service.getAllInvoices().subscribe((data: Invoices[])=>{
      console.log(data);
      this.dataSource=new MatTableDataSource(data);
      
    }) 
  }

}
