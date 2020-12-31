import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { InvoicePaymentsServiceService } from '../services/invoice-payments-service.service';
import { MatTableDataSource } from '@angular/material/table';

import { Payments } from '../shared/Payments';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  displayedColumns:string[]=["paydoc","date","amount","document","remark"];
  dataSource:MatTableDataSource<any>

  from_date:Date;
  to_date:Date;

  

  constructor(private router:Router,private titleService:Title,public service:InvoicePaymentsServiceService,public datepipe:DatePipe) {this.titleService.setTitle('Payments') }

  getbydate(){
    
    const formatted_fromdate=this.datepipe.transform(this.from_date, 'yyyy-MM-dd');
    const formatted_todate=this.datepipe.transform(this.to_date, 'yyyy-MM-dd');
    if(formatted_fromdate&&formatted_todate!=null){
      this.service.getPaymentByDate(formatted_fromdate,formatted_todate).subscribe((data:any)=>{
        console.log(data);
        this.dataSource=new MatTableDataSource(data);
      })
    }
    else if(formatted_fromdate!=null){
      this.service.getPaymentByFromDate(formatted_fromdate).subscribe((data:any)=>{
        console.log(data);
        this.dataSource=new MatTableDataSource(data); 
      })
    }
    else if(formatted_todate!=null){
      this.service.getPaymentByFromDate(formatted_todate).subscribe((data:any)=>{
        console.log(data);
        this.dataSource=new MatTableDataSource(data);
      })
    }

  }
  
  
  ngOnInit(): void {
    this.service.getAllPayments().subscribe((data: Payments[])=>{
      console.log(data);
      this.dataSource=new MatTableDataSource(data);
      
      
    })  
  } 

}
