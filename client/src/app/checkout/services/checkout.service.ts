import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {IDeliveryMethod} from "../../shared/models/DeliveryMethod";
import {map} from "rxjs/operators";
import {IOrderToCreate} from "../../shared/models/order";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public readonly baseUrl: string = environment.baseUrl;

  constructor(private _httpClient: HttpClient) {
  }

  public creatOrder(order: IOrderToCreate) {
    return this._httpClient.post(`${this.baseUrl}/orders`, order);
  }

  public getDeliveryMethods() {
    return this._httpClient.get<IDeliveryMethod[]>(`${this.baseUrl}/orders/deliveryMethods`).pipe(
      map((dm: IDeliveryMethod[]) => {
        return dm.sort((a, b) => b.price - a.price);
      })
    );
  }
}
