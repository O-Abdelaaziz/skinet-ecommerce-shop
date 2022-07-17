import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShopRoutingModule} from './shop-routing.module';
import {ShopComponent} from './shop.component';
import {ProductItemComponent} from './components/product-item/product-item.component';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    PaginationModule
  ],
  exports: [ShopComponent]
})
export class ShopModule {
}
