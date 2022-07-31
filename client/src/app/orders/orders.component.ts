import {Component, OnInit} from '@angular/core';
import {IOrder} from "../shared/models/order";
import {OrderService} from "./services/order.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orders: IOrder[] = [];

  constructor(private _ordersService: OrderService) {
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this._ordersService.getOrdersForUser().subscribe(
      (orders: IOrder[]) => {
        this.orders = orders;
      }, error => {
        console.log(error);
      });
  }


}
