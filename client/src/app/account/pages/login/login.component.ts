import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {IUser} from "../../../shared/models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  public submitted = false;


  constructor(
    private _accountService: AccountService,
    private _formBuilder: FormBuilder
  ) {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('',),
      password: new FormControl('',),
    })
  }

  ngOnInit(): void {
    this.loginFormGroup = this._formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get loginFormControls(): { [key: string]: AbstractControl } {
    return this.loginFormGroup.controls;
  }

  public onSubmitForm() {
    this._accountService.login(this.loginFormGroup.value).subscribe(
      (user) => {
        console.log('User login with : '+user);
      }, (error) => {
        console.log(error)
      }
    )
  }

}
