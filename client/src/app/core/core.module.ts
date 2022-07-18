import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainNavbarComponent} from "./layouts/main-navbar/main-navbar.component";
import {RouterModule} from "@angular/router";
import {NotFoundComponent} from './pages/errors/not-found/not-found.component';
import {ServerErrorComponent} from './pages/errors/server-error/server-error.component';
import {NotifierModule} from "angular-notifier";
import {customNotifierOption} from "./constants/notifier-cosntant";


@NgModule({
  declarations: [MainNavbarComponent, NotFoundComponent, ServerErrorComponent],
  imports: [
    CommonModule,
    RouterModule,
    NotifierModule.withConfig(customNotifierOption),
  ],
  exports: [MainNavbarComponent, NotifierModule]
})
export class CoreModule {
}
