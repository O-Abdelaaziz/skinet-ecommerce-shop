import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IBasket} from "../../../shared/models/basket";
import {BasketService} from "../../../basket/services/basket.service";
import {CdkStepper} from "@angular/cdk/stepper";

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss']
})
export class CheckoutReviewComponent implements OnInit {
  public basket$: Observable<IBasket | null>=new Observable<IBasket | null>();
  @Input() appStepper!: CdkStepper;

  constructor(private _basketService: BasketService) {
  }

  ngOnInit(): void {
    this.basket$=this._basketService.basket$;
  }

  createPaymentIntent() {
    return this._basketService.createPaymentIntent().subscribe((response: any) => {
      this.appStepper.next();
    }, error => {
      console.log(error);
    });
  }

}
