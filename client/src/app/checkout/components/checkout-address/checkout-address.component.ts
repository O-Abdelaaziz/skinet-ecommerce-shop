import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AccountService} from "../../../account/services/account.service";
import {AngularNotifierService, NotifierEnum} from "../../../core/services/angular-notifier.service";

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent implements OnInit {
  @Input()
  public checkoutForm!: FormGroup;

  constructor(private _accountService: AccountService, private _angularNotifierService: AngularNotifierService) {
  }

  ngOnInit(): void {
  }

  public updateDefaultUserAddress() {
    this._accountService.updateUserAddress(this.checkoutForm.get('addressForm')?.value).subscribe(
      (response) => {
        this._angularNotifierService.showNotification(NotifierEnum.SUCCESS, 'Address saved successfully');
        this.checkoutForm.get('deliveryForm')?.reset(response);
      },
      (error) => {
        console.log(error);
        this._angularNotifierService.showNotification(NotifierEnum.ERROR, error.message);
      }
    );
  }
}
