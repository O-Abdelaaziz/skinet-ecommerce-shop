import {Component, OnInit} from '@angular/core';
import {ShopService} from "./services/shop.service";
import {IProduct} from "../shared/models/Product";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public products: IProduct[] = [];

  constructor(private _shopService: ShopService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    this._shopService.getProductsList().subscribe(
      response => {
        this.products = response.data;
        console.log(this.products)
      }, (error) => {
        console.log(error)
      })
  }

}
