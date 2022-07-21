import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Basket, IBasket, IBasketItem, IBasketTotals} from "../../shared/models/basket";
import {IProduct} from "../../shared/models/product";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public readonly baseUrl: string = environment.baseUrl;
  private basketSource: BehaviorSubject<IBasket | null> = new BehaviorSubject<IBasket | null>(null);
  public basket$ = this.basketSource.asObservable();
  private basketTotalSource: BehaviorSubject<IBasketTotals | null> = new BehaviorSubject<IBasketTotals | null>(null);
  public basketTotal$ = this.basketTotalSource.asObservable();

  constructor(private _httpClient: HttpClient) {
  }

  public getBasket(id: string) {
    return this._httpClient.get<IBasket>(`${this.baseUrl}/basket?id=${id}`)
      .pipe(
        map((basket: IBasket) => {
          this.basketSource.next(basket);
          this.calculateTotals();
        })
      );
  }

  public setBasket(basket: IBasket) {
    return this._httpClient.post<Basket>(`${this.baseUrl}/basket`, basket)
      .subscribe(
        (response: IBasket) => {
          this.basketSource.next(response);
          this.calculateTotals();
        }, (error) => {
          console.log("Error In setBasket : " + JSON.stringify(error))
        });
  }

  public getCurrentBasket() {
    return this.basketSource.value;
  }

  public addItemsToBasket(item: IProduct, quantity: number = 1) {
    const itemToAdd: IBasketItem = this.mapProductItemToBasketItem(item, quantity);
    let basket = this.getCurrentBasket();
    if (basket === null) {
      this.createBasket();
    } else {
      basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
      this.setBasket(basket);
    }
  }

  public incrementItemQuantity(item: IBasketItem) {
    const basket = this.getCurrentBasket();
    if (basket) {
      const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
      basket.items[foundItemIndex].quantity++;
      this.setBasket(basket);
    }
  }

  public decrementItemQuantity(item: IBasketItem) {
    const basket = this.getCurrentBasket();
    if (basket) {
      const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
      if (basket.items[foundItemIndex].quantity > 1) {
        basket.items[foundItemIndex].quantity--;
      } else {
        this.removeItemFromBasket(item);
      }
      this.setBasket(basket);
    }
  }

  public removeItemFromBasket(item: IBasketItem) {
    const basket = this.getCurrentBasket();
    if (basket?.items.some(x => x.id === item.id)) {

      basket.items = basket?.items.filter(x => x.id !== item.id);
      if (basket?.items.length > 0) {
        this.setBasket(basket);
      } else {
        this.deleteBasket(basket);
      }
    }
  }

  private deleteBasket(basket: IBasket) {
    return this._httpClient.delete(`${this.baseUrl}/basket?id=${basket.id}`).subscribe(
      () => {
        this.basketSource.next(null);
        this.basketTotalSource.next(null);
        localStorage.removeItem('basket_id');
      }, (error) => {
        console.log(error);
      }
    )
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
    localStorage.setItem('basket_id', basket.id)
    return basket;
  }

  private addOrUpdateItem(items: IBasketItem[], itemToAdd: IBasketItem, quantity: number): IBasketItem[] {
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      items[index].quantity++;
    }
    return items;
  }

  private calculateTotals() {
    const basket = this.getCurrentBasket();
    const shipping = 0;
    const subtotal = Number(basket?.items.reduce((a, b) => (b.price * b.quantity) + a, 0));
    const total = subtotal + shipping;
    this.basketTotalSource.next({shipping, total, subtotal})
  }
}
