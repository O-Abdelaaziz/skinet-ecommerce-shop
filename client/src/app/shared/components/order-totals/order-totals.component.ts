import {Component, OnInit} from '@angular/core';
import {BasketService} from "../../../basket/services/basket.service";
import {Observable} from "rxjs";
import {IBasketTotals} from "../../models/basket";

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  public basketTotals$: Observable<IBasketTotals | null> = new Observable<IBasketTotals | null>();

  constructor(private _basketService: BasketService) {
  }

  ngOnInit(): void {
    this.getCurrentBasketTotals()
  }

  getCurrentBasketTotals() {
    this.basketTotals$ = this._basketService.basketTotal$;
  }

}
