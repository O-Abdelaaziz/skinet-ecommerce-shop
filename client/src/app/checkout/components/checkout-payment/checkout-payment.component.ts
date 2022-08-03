import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {BasketService} from "../../../basket/services/basket.service";
import {CheckoutService} from "../../services/checkout.service";
import {AngularNotifierService, NotifierEnum} from "../../../core/services/angular-notifier.service";
import {IBasket} from "../../../shared/models/basket";
import {NavigationExtras, Router} from "@angular/router";

declare var Stripe:any;

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit, OnDestroy {
  @Input()
  public checkoutForm!: FormGroup;
  @ViewChild('cardNumber', {static: true})
  public cardNumberElement: ElementRef = {} as ElementRef;
  @ViewChild('cardExpiry', {static: true})
  public cardExpiryElement: ElementRef = {} as ElementRef;
  @ViewChild('cardCvc', {static: true})
  public cardCvcElement: ElementRef = {} as ElementRef;
  public stripe: any;
  public cardNumber: any;
  public cardExpiry: any;
  public cardCvc: any;
  public cardErrors: any;

  constructor(private _basketService: BasketService, private _checkoutService: CheckoutService, private _angularNotifierService: AngularNotifierService, private _router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  }

  ngAfterViewInit() {
    this.stripe = Stripe('pk_test_51LS4hsEBaeITZMNNGnEv4O8jgvEyOjlPeXsED0vh1AsfOQaWYQZaFIid8qpJS14T2nitkaPvu9LVmgB2BbcN5euy00lI10BQqE');
    const elements = this.stripe.elements();

    this.cardNumber = elements.create('cardNumber');
    this.cardNumber.mount(this.cardNumberElement.nativeElement);
    //this.cardNumber.addEventListener('change', this.cardHandler);

    this.cardExpiry = elements.create('cardExpiry');
    this.cardExpiry.mount(this.cardExpiryElement.nativeElement);
    //this.cardExpiry.addEventListener('change', this.cardHandler);

    this.cardCvc = elements.create('cardCvc');
    this.cardCvc.mount(this.cardCvcElement.nativeElement);
    //this.cardCvc.addEventListener('change', this.cardHandler);
  }

  onSubmitOrder() {
    const basket = this._basketService.getCurrentBasket();
    if (basket) {
      const orderToCreate = this.getOrderToCreate(basket);
      this._checkoutService.creatOrder(orderToCreate).subscribe(
        (response) => {
          this._angularNotifierService.showNotification(NotifierEnum.SUCCESS, 'Order created successfully');
          this._basketService.deleteLocalBasket(basket?.id);
          const navigationExtras: NavigationExtras = {state: response};
          this._router.navigate(['checkout/success'], navigationExtras);
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
