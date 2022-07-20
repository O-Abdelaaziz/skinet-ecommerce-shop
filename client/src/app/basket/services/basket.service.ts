import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {IBasket} from "../../shared/models/basket";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public readonly baseUrl: string = environment.baseUrl;
  private basketSource: BehaviorSubject<IBasket> = new BehaviorSubject<IBasket>({id: '', items: []});
  public basket$ = this.basketSource.asObservable();

  constructor(private _httpClient: HttpClient) {
  }

  public getBasket(id: string) {
    return this._httpClient.get<IBasket>(`${this.baseUrl}/basket?id=${id}`)
      .pipe(
        map((basket: IBasket) => {
          this.basketSource.next(basket);
        })
      );
  }

  public setBasket(basket: IBasket) {
    return this._httpClient.post<IBasket>(`${this.baseUrl}/basket`, basket)
      .subscribe(
        (response: IBasket) => {
          this.basketSource.next(response)
        }, (error) => {
          console.log("Error In setBasket : " + error)
        });
  }

  public getCurrentBasket() {
    return this.basketSource.value;
  }
}
