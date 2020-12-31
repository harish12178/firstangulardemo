import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PaymentsComponent } from './payments/payments.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoicePaymentsServiceService } from './services/invoice-payments-service.service';
import { HttpClientModule } from '@angular/common/http';
import { GenerateComponent } from './generate/generate.component';
import { DatePipe } from '@angular/common';
import { TrnComponent } from './trn/trn.component';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({ 
  declarations: [
    AppComponent,
    PaymentsComponent,
    InvoiceComponent,
    GenerateComponent,
    TrnComponent
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    MatToolbarModule
    
    
  ],
  providers: [InvoicePaymentsServiceService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
