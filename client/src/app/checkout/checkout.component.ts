import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../account/services/account.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public checkoutForm: FormGroup;

  constructor(private _accountService: AccountService, private _formBuilder: FormBuilder) {
    this.checkoutForm = new FormGroup({
      addressForm: new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        country: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        street: new FormControl(''),
        zipCode: new FormControl(''),
      }),
      deliveryForm: new FormGroup({
        deliveryMethod: new FormControl(''),
      }),
      paymentForm: new FormGroup({
        nameOnCard: new FormControl(''),
      }),
    })
  }

  ngOnInit(): void {
    this.createCheckoutForm();
    this.getAddressFormValues();
  }

  public createCheckoutForm() {
    this.checkoutForm = this._formBuilder.group({
      addressForm: this._formBuilder.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        country: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        street: [null, Validators.required],
        zipCode: [null, Validators.required],
      }),
      deliveryForm: this._formBuilder.group({
        deliveryMethod: [null, Validators.required]
      }),
      paymentForm: this._formBuilder.group({
        nameOnCard: [null, Validators.required]
      })
    })
  }

  public getAddressFormValues() {
    this._accountService.getUserAddress().subscribe(
      (response) => {
        if (response) {
          this.checkoutForm.get('addressForm')?.patchValue(response);
        }
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
