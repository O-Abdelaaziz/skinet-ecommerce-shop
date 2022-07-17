import {Component, OnInit} from '@angular/core';
import {ShopService} from "./services/shop.service";
import {IProduct} from "../shared/models/product";
import {IBrand} from "../shared/models/brand";
import {IType} from "../shared/models/type";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public products: IProduct[] = [];
  public brands: IBrand[] = [];
  public types: IType[] = [];
  public selectedBrandId: number | undefined;
  public selectedTypeId: number | undefined;

  constructor(private _shopService: ShopService) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  public getProducts() {
    this._shopService.getProductsList(this.selectedBrandId, this.selectedTypeId).subscribe(
      response => {
        this.products = response.data;
        console.log(this.products)
      }, (error) => {
        console.log(error)
      })
  }

  public getBrands() {
    this._shopService.getBrandList().subscribe(
      response => {
        this.brands = [{id: 0, name: 'All'}, ...response];
      }, (error) => {
        console.log(error)
      })
  }

  public getTypes() {
    this._shopService.getTypesList().subscribe(
      response => {
        this.types = [{id: 0, name: 'All'}, ...response];
      }, (error) => {
        console.log(error)
      })
  }

  public onBrandSelected(brandId: number) {
    this.selectedBrandId = brandId;
    this.getProducts();
  }

  public onTypeSelected(typeId: number) {
    this.selectedTypeId = typeId;
    this.getProducts();
  }
}
