import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){}
  page:string="Invoice";
  flag:string="invoice";
  ivsrc:string="bill-selected";
  paysrc:string="payment";
  img:string[]=["bill","bill-selected","payment","payment-selected"];

  onClick(value:string){
    if (value=="payments") {
      this.flag="payments";
      this.page="Payments";
      this.paysrc="payment-selected";
      this.ivsrc="bill";
      this.router.navigate(['/payments']);
    }
    if(value=="invoice"){
      this.flag="invoice";
      this.page="Invoice";
      this.paysrc="payment";
      this.ivsrc="bill-selected";
      this.router.navigate(['/invoice']);
    }
    
  }
  
  
}
