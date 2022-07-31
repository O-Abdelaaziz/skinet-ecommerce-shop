import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IOrder} from "../../shared/models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public readonly baseUrl: string = environment.baseUrl;

  constructor(private _httpClient: HttpClient) {
  }

  public getOrdersForUser() :Observable<IOrder[]> {
    return this._httpClient.get<IOrder[]>(`${this.baseUrl}/orders`);
  }

  public getOrderDetailed(id: number) :Observable<IOrder>{
    return this._httpClient.get<IOrder>(`${this.baseUrl}/orders/${id}`);
  }
}
