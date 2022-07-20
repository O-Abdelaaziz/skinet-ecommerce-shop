import {Component, OnInit} from '@angular/core';
import {BasketService} from "../../../basket/services/basket.service";
import {Observable} from "rxjs";
import {IBasket} from "../../../shared/models/basket";

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  public basket$: Observable<IBasket | null> = new Observable<IBasket | null>();
  public isCollapsed = false;

  constructor(private _basketService: BasketService) {
  }

  ngOnInit(): void {
    this.getCurrentBasketValue();
  }

  public getCurrentBasketValue() {
    this.basket$ = this._basketService.basket$;
  }
}
