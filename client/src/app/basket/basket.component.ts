import { Component, OnInit } from '@angular/core';
import {BasketService} from "./services/basket.service";
import {Observable} from "rxjs";
import {IBasket, IBasketItem} from "../shared/models/basket";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  public basket$: Observable<IBasket | null> = new Observable<IBasket | null>();

  constructor(private _basketService: BasketService) { }

  ngOnInit(): void {
    this.getCurrentBasketValue();
  }

  public getCurrentBasketValue() {
    this.basket$ = this._basketService.basket$;
  }

  removeBasketItem(item: IBasketItem) {
    this._basketService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: IBasketItem) {
    this._basketService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: IBasketItem) {
    this._basketService.decrementItemQuantity(item);
  }

}
