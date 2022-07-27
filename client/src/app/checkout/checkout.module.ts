import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import {SharedModule} from "../shared/shared.module";
import { CheckoutAddressComponent } from './components/checkout-address/checkout-address.component';
import { CheckoutDeliveryComponent } from './components/checkout-delivery/checkout-delivery.component';
import { CheckoutReviewComponent } from './components/checkout-review/checkout-review.component';
import { CheckoutPaymentComponent } from './components/checkout-payment/checkout-payment.component';
import { CheckoutSuccessComponent } from './components/checkout-success/checkout-success.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutAddressComponent,
    CheckoutDeliveryComponent,
    CheckoutReviewComponent,
    CheckoutPaymentComponent,
    CheckoutSuccessComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule
  ]
})
export class CheckoutModule { }
