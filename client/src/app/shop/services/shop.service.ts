import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {IPagination} from "../../shared/models/Pagination";
import {Observable} from "rxjs";

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
}
