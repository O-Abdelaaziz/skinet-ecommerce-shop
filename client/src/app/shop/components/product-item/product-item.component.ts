import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../../shared/models/product";
import {BasketService} from "../../../basket/services/basket.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  public product: IProduct | undefined;

  constructor(private _basketService: BasketService) {
  }

  ngOnInit(): void {
  }

  public addItemToBasket() {
    this._basketService.addItemsToBasket(this.product!);
  }

}
