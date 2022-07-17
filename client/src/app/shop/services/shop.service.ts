import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {IPagination} from "../../shared/models/pagination";
import {Observable} from "rxjs";
import {IBrand} from "../../shared/models/brand";
import {IType} from "../../shared/models/type";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  public readonly baseUrl: string = environment.baseUrl;

  constructor(private _httpClient: HttpClient) {
  }

  getProductsList(brandId?: number, typeId?: number, sort?: string): Observable<IPagination> {
    let params = new HttpParams();

    if (brandId) {
      params = params.append("brandId", brandId.toString());
    }

    if (typeId) {
      params = params.append("typeId", typeId.toString());
    }

    if (sort) {
      params = params.append("sort", sort.toString());
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
