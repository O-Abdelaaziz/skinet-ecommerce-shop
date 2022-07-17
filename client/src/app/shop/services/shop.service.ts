import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {IPagination} from "../../shared/models/pagination";
import {Observable} from "rxjs";
import {IBrand} from "../../shared/models/brand";
import {IType} from "../../shared/models/type";
import {ShopParams} from "../../shared/models/ShopParams";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  public readonly baseUrl: string = environment.baseUrl;

  constructor(private _httpClient: HttpClient) {
  }

  getProductsList(shopParams: ShopParams): Observable<IPagination> {
    let params = new HttpParams();

    if (shopParams.brandId) {
      params = params.append("brandId", shopParams.brandId.toString());
    }

    if (shopParams.typeId) {
      params = params.append("typeId", shopParams.typeId.toString());
    }

    if (shopParams.sort) {
      params = params.append("sort", shopParams.sort.toString());
    }

    return this._httpClient.get<IPagination>(`${this.baseUrl}/products`, {params});
  }

  getBrandList(): Observable<IBrand[]> {
    return this._httpClient.get<IBrand[]>(`${this.baseUrl}/products/brands`);
  }

  getTypesList(): Observable<IType[]> {
    return this._httpClient.get<IType[]>(`${this.baseUrl}/products/types`);
  }
}
