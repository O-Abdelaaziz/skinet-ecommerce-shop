import {Injectable} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public busyRequestCount: number = 0;

  constructor(private _ngxSpinnerService: NgxSpinnerService) {
  }

  //busy
  public showSpinner() {
    this.busyRequestCount++;
    this._ngxSpinnerService.show(undefined, {
      type: 'ball-scale-ripple',
      bdColor: 'rgba(255,255,255, 0.7)',
      color: '#333333'
    })
  }

  //idle
  public hideSpinner() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this._ngxSpinnerService.hide();
    }
  }
}
