import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {BasketService} from "../../../basket/services/basket.service";
import {CheckoutService} from "../../services/checkout.service";
import {AngularNotifierService, NotifierEnum} from "../../../core/services/angular-notifier.service";
import {IBasket} from "../../../shared/models/basket";

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit {
  @Input()
  public checkoutForm!: FormGroup;

  constructor(private _basketService: BasketService, private _checkoutService: CheckoutService, private _angularNotifierService: AngularNotifierService) {
  }

  ngOnInit(): void {
  }

  onSubmitOrder() {
    const basket = this._basketService.getCurrentBasket();
    if (basket) {
      const orderToCreate = this.getOrderToCreate(basket);
      this._checkoutService.creatOrder(orderToCreate).subscribe(
        (response) => {
          this._angularNotifierService.showNotification(NotifierEnum.SUCCESS, 'Order created successfully');
          this._basketService.deleteLocalBasket(basket?.id);
          console.log(response)
        },
        (error) => {
          this._angularNotifierService.showNotification(NotifierEnum.ERROR, error.message);
        }
      )
    }
  }

  private getOrderToCreate(basket: IBasket) {
    return {
      basketId: basket.id,
      deliveryMethodId: +this.checkoutForm?.get('deliveryForm')?.get('deliveryMethod')?.value,
      shipToAddress: this.checkoutForm?.get('addressForm')?.value
    };
  }
}
