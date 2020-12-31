import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsComponent } from './payments/payments.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { GenerateComponent } from './generate/generate.component';




const routes: Routes = [
{
  path:'payments',
  component:PaymentsComponent
},
{
  path:'invoice',
  component:InvoiceComponent
},
{
  path:'generate',
  component:GenerateComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
