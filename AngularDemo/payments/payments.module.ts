import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    CommonModule,
    PaymentsComponent,
    SharedModule
  ]
})
export class PaymentsModule {
  

 }
