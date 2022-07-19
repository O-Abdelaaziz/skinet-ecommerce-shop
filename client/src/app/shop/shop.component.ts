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

  public shopParams: ShopParams = new ShopParams();
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
  }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  public getProducts() {
    this._shopService.getProductsList(this.shopParams).subscribe(
      response => {
        this.products = response.data;
        this.shopParams.pageNumber = response.pageIndex;
        this.shopParams.pageSize = response.pageSize;
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
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  public onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onSortSelected(event: Event) {
    this.shopParams.sort = (event.target as HTMLInputElement).value;
    this.getProducts();
  }

  onPageChange(event: any) {
    if (this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }

  onPageSizeChange(event: any): void {
    this.shopParams.pageSize = event.target.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onSearch() {
    this.shopParams.search = this.keyword.nativeElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts()
  }
}
