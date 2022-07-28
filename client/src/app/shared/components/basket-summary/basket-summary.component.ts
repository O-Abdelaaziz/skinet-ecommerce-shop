import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {IBasket, IBasketItem} from "../../models/basket";
import {BasketService} from "../../../basket/services/basket.service";

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
  public basket$: Observable<IBasket | null>;
  @Input()
  public isBasket: boolean = true;
  @Output()
  increment: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output()
  decrement: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output()
  remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();

  constructor(private _basketService: BasketService) {
    this.basket$ = this._basketService.basket$;
  }

  ngOnInit(): void {
  }

  incrementItemQuantity(item: IBasketItem) {
    this.increment.next(item)
  }

  decrementItemQuantity(item: IBasketItem) {
    this.decrement.next(item)
  }

  removeBasketItem(item: IBasketItem) {
    this.remove.next(item)
  }
}
