import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InvoiceComponent } from './invoice.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InvoiceComponent,
    SharedModule
  ]
  
})
export class InvoiceModule { }
