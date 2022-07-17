import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
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

  getProductsList(): Observable<IPagination> {
    return this._httpClient.get<IPagination>(`${this.baseUrl}/products?pageSize=50`);
  }

  getBrandList(): Observable<IBrand[]> {
    return this._httpClient.get<IBrand[]>(`${this.baseUrl}/products/brands`);
  }

  getTypesList(): Observable<IType[]> {
    return this._httpClient.get<IType[]>(`${this.baseUrl}/products/types`);
  }
}
