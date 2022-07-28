import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public checkoutForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.checkoutForm = new FormGroup({
      addressForm: new FormGroup({
        firstName: new FormControl('',Validators.required),
        lastName: new FormControl('',Validators.required),
        country: new FormControl('',Validators.required),
        city: new FormControl('',Validators.required),
        state: new FormControl('',Validators.required),
        street: new FormControl('',Validators.required),
        zipCode: new FormControl('',Validators.required),
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

}
