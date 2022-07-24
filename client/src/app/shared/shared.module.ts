import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagingHeaderComponent} from './components/paging-header/paging-header.component';
import {PagerComponent} from './components/pager/pager.component';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {CarouselModule} from "ngx-bootstrap/carousel";
import {OrderTotalsComponent} from './components/order-totals/order-totals.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    OrderTotalsComponent
  ],
  imports: [
    CommonModule,
    PaginationModule,
    CarouselModule,
    ReactiveFormsModule,
  ], exports: [
    PagingHeaderComponent,
    PagerComponent,
    OrderTotalsComponent,
    CarouselModule,
    ReactiveFormsModule,

  ],
})
export class SharedModule {
}
