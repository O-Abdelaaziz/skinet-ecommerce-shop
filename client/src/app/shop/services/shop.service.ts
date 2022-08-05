import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {IPagination, Pagination} from "../../shared/models/pagination";
import {Observable, of} from "rxjs";
import {IBrand} from "../../shared/models/brand";
import {IType} from "../../shared/models/type";
import {ShopParams} from "../../shared/models/ShopParams";
import {IProduct} from "../../shared/models/product";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  public readonly baseUrl: string = environment.baseUrl;
  public products: IProduct[] = [];
  public brands: IBrand[] = [];
  public types: IType[] = [];
  // @ts-ignore
  public pagination = new Pagination();
  // @ts-ignore
  public shopParams = new ShopParams();
  public productCache = new Map();

  constructor(private _httpClient: HttpClient) {
  }

  getProductsList(useCache: boolean) {

    if (useCache === false) {
      this.products = [];
    }

    if (this.productCache.size > 0 && useCache === true) {
      if (this.productCache.has(Object.values(this.shopParams).join('-'))) {
        this.pagination.data=this.productCache.get(Object.values(this.shopParams).join('-'));
        return of(this.pagination);
      }
    }

    let params = new HttpParams();

    if (this.shopParams.brandId !== 0) {
      params = params.append("brandId", this.shopParams.brandId.toString());
    }

    if (this.shopParams?.typeId !== 0) {
      params = params.append("typeId", this.shopParams.typeId.toString());
    }

    if (this.shopParams.search !== '') {
      params = params.append("search", this.shopParams.search.toString());
    }

    params = params.append("sort", this.shopParams.sort.toString());
    params = params.append("pageIndex", this.shopParams.pageNumber.toString());
    params = params.append("pageSize", this.shopParams.pageSize.toString());


    return this._httpClient.get<IPagination>(`${this.baseUrl}/products`, {observe: 'response', params})
      .pipe(
        map(response => {
          this.productCache.set(Object.values(this.shopParams).join('-'), response.body?.data);
          this.pagination = response.body!;
          return this.pagination;
        })
      );
  }

  getShopParams() {
    return this.shopParams;
  }

  setShopParams(params: ShopParams) {
    this.shopParams = params;
  }

  getProductById(id: number) {
    let product: IProduct| undefined;
    this.productCache.forEach((products: IProduct[]) => {
      product = products.find(p => p.id === id) as IProduct;
    })

    if (product) {
      return of(product);
    }
    return this._httpClient.get<IProduct>(`${this.baseUrl}/products/${id}`);
  }

  getBrandList(): Observable<IBrand[]> {
    if (this.brands.length > 0) {
      return of(this.brands)
    }
    return this._httpClient.get<IBrand[]>(`${this.baseUrl}/products/brands`)
      .pipe(
        map(response => {
          this.brands = response;
          return response;
        })
      );
  }

  getTypesList(): Observable<IType[]> {
    if (this.types.length > 0) {
      return of(this.types)
    }
    return this._httpClient.get<IType[]>(`${this.baseUrl}/products/types`).pipe(
      map(response => {
        this.types = response;
        return response;
      })
    );
  }
}
