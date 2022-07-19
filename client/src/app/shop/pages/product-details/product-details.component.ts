import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../../shared/models/product";
import {ShopService} from "../../services/shop.service";
import {ActivatedRoute} from "@angular/router";
import {BreadcrumbService} from "xng-breadcrumb";

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
    private _breadcrumbService: BreadcrumbService,
    private _activatedRoute: ActivatedRoute) {
    this._breadcrumbService.set('@productDetails', ' ');
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
        this._breadcrumbService.set('@productDetails', this.product.name);
      }
    )
  }

}
