import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../../shared/models/product";
import {ShopService} from "../../services/shop.service";
import {ActivatedRoute} from "@angular/router";
import {BreadcrumbService} from "xng-breadcrumb";
import {BasketService} from "../../../basket/services/basket.service";
import {IBasketItem} from "../../../shared/models/basket";

const PARAM_NAME: string = 'id';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product!: IProduct;
  public productId: number = 0;
  public quantity: number = 1;

  constructor(
    private _shopService: ShopService,
    private _breadcrumbService: BreadcrumbService,
    private _basketService: BasketService,
    private _activatedRoute: ActivatedRoute) {
    this._breadcrumbService.set('@productDetails', ' ');
  }

  ngOnInit(): void {
    this.getProductIdParam();
    this.getProductDetails();
  }

  public getProductIdParam() {
    this._activatedRoute.paramMap.subscribe((params) => {
      if (params.has(PARAM_NAME)) {
        this.productId = Number(params.get(PARAM_NAME));
      }
    })
  }

  public getProductDetails() {
    this._shopService.getProductById(this.productId).subscribe(
      response => {
        this.product = response;
        this._breadcrumbService.set('@productDetails', this.product.name);
      }
    )
  }

  public addItemToBasket() {
    this._basketService.addItemsToBasket(this.product, this.quantity);
  }

  public incrementItemQuantity() {
    this.quantity++;
  }

  public decrementItemQuantity() {
    if (this.quantity > 1) {
      this.quantity--
    }
  }
}
