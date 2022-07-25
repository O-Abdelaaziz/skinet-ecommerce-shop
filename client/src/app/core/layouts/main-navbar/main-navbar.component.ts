import {Component, OnInit} from '@angular/core';
import {BasketService} from "../../../basket/services/basket.service";
import {Observable} from "rxjs";
import {IBasket} from "../../../shared/models/basket";
import {IUser} from "../../../shared/models/user";
import {AccountService} from "../../../account/services/account.service";

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  public basket$: Observable<IBasket | null> = new Observable<IBasket | null>();
  public currentUser$: Observable<IUser | null> = new Observable<IUser | null>();
  public isCollapsed = false;

  constructor(private _basketService: BasketService, private _accountService: AccountService) {
  }

  ngOnInit(): void {
    this.getCurrentBasketValue();
    this.getCurrentUserValue();
  }

  public getCurrentBasketValue() {
    this.basket$ = this._basketService.basket$;
  }

  public getCurrentUserValue() {
    this.currentUser$ = this._accountService.currentUser$;
  }

  public onLogout() {
    this._accountService.logout();
  }
}
