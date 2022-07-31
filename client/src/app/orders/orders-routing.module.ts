import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrdersComponent} from "./orders.component";
import {OrderDetailsComponent} from "./pages/order-details/order-details.component";

const routes: Routes = [
  {path: '', component: OrdersComponent},
  {path: ':id', component: OrderDetailsComponent, data: {breadcrumb: {alias: 'OrderDetails'}}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}
