import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BreadcrumbService} from "xng-breadcrumb";
import {OrderService} from "../../services/order.service";
import {IOrder} from "../../../shared/models/order";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  public order: IOrder | null = null;

  constructor(private _activatedRoute: ActivatedRoute, private _breadcrumbService: BreadcrumbService, private _ordersService: OrderService) {
    this._breadcrumbService.set('@OrderDetails', '');
  }

  ngOnInit() {
    this._ordersService.getOrderDetailed(
      +this._activatedRoute.snapshot.paramMap.get('id')!)
      .subscribe((order: IOrder) => {
        this.order = order;
        this._breadcrumbService.set('@OrderDetails', `Order# ${order.id} - ${order.status}`);
      }, error => {
        console.log(error);
      });
  }

}
