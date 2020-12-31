import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InvoicePaymentsServiceService } from '../services/invoice-payments-service.service';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';
import { Invoices } from '../shared/Invoices';
import { Payments } from '../shared/Payments';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  new_payment:Payments[]=[{
    Id:null,
    Client:"1000",
    Company:"Exalca",
    Type:"Pvt",
    PatnerId:"Harish",
    FiscalYear:"2020",
    IsActive:true,
    CreatedOn:null,
    CreatedBy:"80245",
    ModifiedOn:null,
    ModifiedBy:null,
    PaymentDoc:"123123",
    Date:new Date,
    Amount:7000,
    Currency:"INR",
    Remark:"Good",
    Attachment:"Sample_new.pdf"
  }]

  constructor(private router:Router,private fbuilder:FormBuilder,private service:InvoicePaymentsServiceService,private notification:NotificationService) { }

  invoice_form=this.fbuilder.group({
    Id:[],
    Client:[''],
    Company:[''],
    Type:[''],
    PatnerId:[''],
    FiscalYear:[''],
    IsActive:[],
    CreatedOn:[null],
    CreatedBy:[''],
    ModifiedOn:[null],
    ModifiedBy:[''],
    InvoiceNo:[''],
    InvoiceDate:[null],
    InvoiceAmount:[],
    PoReference:[''],
    PaidAmount:[],
    Currency:[''],
    DateofPayment:[null],
    Status:[''],
    AttID:[''],
    PODDate:[null],
    PODConfirmedBy:['']

  });
  invoice_arr:Invoices[];
  payments_form=this.fbuilder.group({
    Id:[],
    Client:[''],
    Company:[''],
    Type:[''],
    PatnerId:[''],
    FiscalYear:[''],
    IsActive:[],
    CreatedOn:[null],
    CreatedBy:[''],
    ModifiedOn:[null],
    ModifiedBy:[''],
    PaymentDoc:[''],
    Date:[null],
    Amount:[],
    Currency:[''],
    Remark:[''],
    Attachment:['']
  });
  payment_arr:Payments[]

  handlesubmit(){
    
    this.invoice_arr=[this.invoice_form.value];
    this.service.createInvoice(this.invoice_arr).subscribe(res => {
      this.notification.success("Invoice updated");
      console.log("Invoice updated");
    });
  }
  handlegotoinvoice(){
      this.router.navigate(['/invoice']);
  }
  handleclear(){
    this.invoice_form.reset();
    
  }
  handlesubmit1(){
    this.payment_arr=[this.payments_form.value];
    this.service.createPayment(this.payment_arr).subscribe(res => {
      this.notification.success("Payment updated");
      console.log("Payment updated");
    });
  }
  handlegotoinvoice1(){
      this.router.navigate(['/payments']);
  }
  handleclear1(){
    this.payments_form.reset();
    
  }
  
  ngOnInit(): void {
  }

}
 