import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagingHeaderComponent} from './components/paging-header/paging-header.component';
import {PagerComponent} from './components/pager/pager.component';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {CarouselModule} from "ngx-bootstrap/carousel";
import {OrderTotalsComponent} from './components/order-totals/order-totals.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {TextInputComponent} from './components/text-input/text-input.component';
import {CdkStepperModule} from "@angular/cdk/stepper";
import { StepperComponent } from './components/stepper/stepper.component';


@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    OrderTotalsComponent,
    TextInputComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    CdkStepperModule,
  ], exports: [
    ReactiveFormsModule,
    PagingHeaderComponent,
    PagerComponent,
    OrderTotalsComponent,
    TextInputComponent,
    StepperComponent,
    CarouselModule,
    BsDropdownModule,
    PaginationModule,
    CdkStepperModule,
  ],
})
export class SharedModule {
}
