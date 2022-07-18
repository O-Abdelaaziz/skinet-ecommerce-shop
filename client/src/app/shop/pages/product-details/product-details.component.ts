import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../../shared/models/product";
import {ShopService} from "../../services/shop.service";
import {ActivatedRoute} from "@angular/router";

const PARAM_NAME: string = 'id';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product: IProduct | undefined;
  public productId: number = 0;

  constructor(
    private _shopService: ShopService,
    private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getProductIdParam();
    this.getProductDetails();
  }

  getProductIdParam() {
    this._activatedRoute.paramMap.subscribe((params) => {
      if (params.has(PARAM_NAME)) {
        this.productId = Number(params.get(PARAM_NAME));
      }
    })
  }

  getProductDetails() {
    this._shopService.getProductById(this.productId).subscribe(
      response => {
        this.product = response;
      }
    )
  }

}