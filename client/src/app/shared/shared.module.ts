import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagingHeaderComponent} from './components/paging-header/paging-header.component';
import {PagerComponent} from './components/pager/pager.component';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {CarouselModule} from "ngx-bootstrap/carousel";


@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent
  ],
  exports: [
    PagingHeaderComponent,
    PagerComponent,
    CarouselModule
  ],
  imports: [
    CommonModule,
    PaginationModule,
    CarouselModule
  ]
})
export class SharedModule {
}
