import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShopRoutingModule} from './shop-routing.module';
import {ShopComponent} from './shop.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {PaginationModule} from "ngx-bootstrap/pagination";


@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent
  ],
    imports: [
        CommonModule,
        ShopRoutingModule,
        PaginationModule
    ],
  exports: [ShopComponent]
})
export class ShopModule {
}
