import {getUniqueId} from "../helpers/UniqueIdGenerator";

export interface IBasket {
  id: string;
  items: IBasketItem[];
  clientSecret?: string;
  paymentIntentId?: string;
  deliveryMethodId?: number;
  shippingPrice?: number;
}

export class Basket implements IBasket {
  id: string = getUniqueId(4);
  items: IBasketItem[] = [];
}

export interface IBasketItem {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;
}

export interface IBasketTotals {
  shipping: number;
  subtotal: number;
  total: number;
}
