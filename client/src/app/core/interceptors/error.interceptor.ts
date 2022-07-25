import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, delay, Observable, throwError} from 'rxjs';
import {NavigationExtras, Router} from "@angular/router";
import {AngularNotifierService, NotifierEnum} from "../services/angular-notifier.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private _angularNotifierService: AngularNotifierService,
    private _router: Router
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      delay(1000),
      catchError((error) => {
        if (error) {
          if (error.status === 400) {
            if (error.error.errors) {
              this._angularNotifierService.showNotification(NotifierEnum.ERROR, error.message);
              throw error.error;
            } else {
              this._angularNotifierService.showNotification(NotifierEnum.ERROR, error.message);
            }
          }
          if (error.status === 401) {
            this._angularNotifierService.showNotification(NotifierEnum.WARNING, error.message);
          }
          if (error.status === 404) {
            this._router.navigateByUrl('/not-found');
          }
          if (error.status === 500) {
            const navigationExtras: NavigationExtras = {state: {error: error.error}};
            this._router.navigateByUrl('/server-error', navigationExtras);
          }
        }
        return throwError(error);
      })
    );
  }
}
