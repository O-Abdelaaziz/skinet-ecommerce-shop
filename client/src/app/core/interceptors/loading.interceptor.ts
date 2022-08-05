import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {delay, finalize, Observable} from 'rxjs';
import {SpinnerService} from "../services/spinner.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private _spinnerService: SpinnerService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'POST' && request.url.includes('orders')) {
      return next.handle(request);
    }
    if (request.method === 'DELETE') {
      return next.handle(request);
    }
    if (!request.url.includes('emailexists')) {
      this._spinnerService.showSpinner()
    }
    return next.handle(request).pipe(
      delay(1000),
      finalize(() => {
        this._spinnerService.hideSpinner();
      })
    );
  }
}
