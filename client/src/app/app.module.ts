import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from './app-routing.module';

import {CoreModule} from "./core/core.module";

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ShopModule} from "./shop/shop.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ShopModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
