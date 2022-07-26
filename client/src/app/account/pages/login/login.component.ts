import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {IUser} from "../../../shared/models/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  public submitted = false;
  public returnUrl = '';


  constructor(
    private _accountService: AccountService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
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

    this.returnUrl = this._activatedRoute.snapshot.queryParams['returnUrl'] || '/shop';
  }

  get loginFormControls(): { [key: string]: AbstractControl } {
    return this.loginFormGroup.controls;
  }

  public onSubmitForm() {
    this.submitted = true;
    this._accountService.login(this.loginFormGroup.value).subscribe(
      (user) => {
        console.log('User login with : ' + user);
        this._router.navigateByUrl(this.returnUrl);
      }, (error) => {
        console.log(error)
      }
    );
  }

  public getFullyCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const nextYear = new Date().getFullYear() + 1;
    return `${currentYear} - ${nextYear}`
  }
}
