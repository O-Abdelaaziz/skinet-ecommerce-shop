import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShopService} from "./services/shop.service";
import {IProduct} from "../shared/models/product";
import {IBrand} from "../shared/models/brand";
import {IType} from "../shared/models/type";
import {ShopParams} from "../shared/models/ShopParams";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public products: IProduct[] = [];

  public brands: IBrand[] = [];
  public types: IType[] = [];

  public shopParams: ShopParams;
  public totalCount: number| undefined;
  public sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price Low to High', value: 'priceAsc'},
    {name: 'Price High to Low', value: 'priceDesc'}
  ];
  public pagesSizes: any = [6, 10, 50, 100];


  @ViewChild('search', {static: true})
  public keyword: ElementRef = {} as ElementRef;


  constructor(private _shopService: ShopService) {
    this.shopParams = this._shopService.getShopParams();
  }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  public getProducts() {
    this._shopService.getProductsList().subscribe(
      response => {
        this.products = response.data;
        this.totalCount = response.count;
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
    const params=this._shopService.shopParams;
    params.brandId = brandId;
    params.pageNumber = 1;
    this._shopService.setShopParams(params);
    this.getProducts();
  }

  public onTypeSelected(typeId: number) {
    const params=this._shopService.shopParams;
    params.typeId = typeId;
    params.pageNumber = 1;
    this._shopService.setShopParams(params);
    this.getProducts();
  }

  onSortSelected(event: Event) {
    const params=this._shopService.shopParams;
    params.sort = (event.target as HTMLInputElement).value;
    this._shopService.setShopParams(params);
    this.getProducts();
  }

  onPageChange(event: any) {
    if (this.shopParams.pageNumber !== event) {
      const params=this._shopService.shopParams;
      params.pageNumber = event;
      this._shopService.setShopParams(params);
      this.getProducts();
    }
  }

  onPageSizeChange(event: any): void {
    const params=this._shopService.shopParams;
    params.pageSize = event.target.value;
    params.pageNumber = 1;
    this._shopService.setShopParams(params);
    this.getProducts();
  }

  onSearch() {
    const params=this._shopService.shopParams;
    params.search = this.keyword.nativeElement.value;
    params.pageNumber = 1;
    this._shopService.setShopParams(params);
    this.getProducts()
  }
}
