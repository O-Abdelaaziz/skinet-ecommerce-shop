import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AccountService} from "../../account/services/account.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(private _accountService: AccountService, private _router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this._accountService.currentUser$.pipe(
      map(auth => {
        if (auth) {
          this._router.navigate(['/shop']);
          return false;
        }
        return true;
      }),
    );
  }

}
