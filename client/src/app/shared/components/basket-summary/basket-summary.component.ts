import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBasket, IBasketItem} from "../../models/basket";
import {IOrderItem} from "../../models/order";

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
  // public basket$: Observable<IBasket | null>;
  @Input()
  public isBasket: boolean = true;
  @Input()
  // @ts-ignore
  public items: any[] =[];
  @Input()
  public isOrder = false;
  @Output()
  public increment: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output()
  public decrement: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output()
  public remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();

  constructor() {
    //this.basket$ = this._basketService.basket$;
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
