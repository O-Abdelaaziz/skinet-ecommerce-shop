import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CheckoutService} from "../../services/checkout.service";
import {IDeliveryMethod} from "../../../shared/models/DeliveryMethod";

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss']
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input()
  public checkoutForm!: FormGroup;
  public deliveryMethods: IDeliveryMethod[] = [];

  constructor(private _checkoutService: CheckoutService) {
  }

  ngOnInit(): void {
    this.getDeliveryMethods();
  }

  private getDeliveryMethods() {
    this._checkoutService.getDeliveryMethods().subscribe(
      (response: IDeliveryMethod[]) => {
        this.deliveryMethods = response;
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
