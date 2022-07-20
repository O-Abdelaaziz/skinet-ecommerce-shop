import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Basket, IBasket, IBasketItem} from "../../shared/models/basket";
import {IProduct} from "../../shared/models/product";

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

  public addItemsToBasket(item: IProduct, quantity: number = 1) {
    const itemToAdd: IBasketItem = this.mapProductItemToBasketItem(item, quantity);
    const basket = this.getCurrentBasket() ?? this.createBasket();
    basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
    this.setBasket(basket);
  }

  private mapProductItemToBasketItem(product: IProduct, quantity: number): IBasketItem {
    return {
      id: product.id,
      productName: product.name,
      brand: product.productBrand,
      type: product.productType,
      pictureUrl: product.pictureUrl,
      price: product.price,
      quantity: quantity
    }
  }

  private createBasket(): IBasket {
    const basket = new Basket();
    localStorage.setItem('basket_id', JSON.stringify(basket.id))
    return basket;
  }

  private addOrUpdateItem(items: IBasketItem[], itemToAdd: IBasketItem, quantity: number): IBasketItem[] {
    const index = items.findIndex(i => i.id = itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      items[index].quantity++;
    }
    return items;
  }
}
