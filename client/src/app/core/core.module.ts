import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainNavbarComponent} from "./layouts/main-navbar/main-navbar.component";



@NgModule({
  declarations: [MainNavbarComponent],
  imports: [
    CommonModule
  ],
  exports:[MainNavbarComponent]
})
export class CoreModule { }
