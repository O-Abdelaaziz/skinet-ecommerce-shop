import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShopRoutingModule} from './shop-routing.module';
import {ShopComponent} from './shop.component';
import {ProductItemComponent} from './components/product-item/product-item.component';
import {SharedModule} from "../shared/shared.module";
import {ProductDetailsComponent} from './pages/product-details/product-details.component';
import {CoreModule} from "../core/core.module";
import {HomeModule} from "../home/home.module";


@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    HomeModule
  ],
  exports: [ShopComponent]
})
export class ShopModule {
}
