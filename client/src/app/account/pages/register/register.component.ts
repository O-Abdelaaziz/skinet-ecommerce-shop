import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerFormGroup: FormGroup;
  public errors: string[] = [];
  public submitted = false;

  constructor(
    private _accountService: AccountService,
    private _formBuilder: FormBuilder,
    private _router: Router,
  ) {
    this.registerFormGroup = new FormGroup({
      displayName: new FormControl('',),
      email: new FormControl('',),
      password: new FormControl('',),
    })
  }

  ngOnInit(): void {
    this.registerFormGroup = this._formBuilder.group({
      displayName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmitForm() {
    this.submitted = true;
    this._accountService.register(this.registerFormGroup.value).subscribe(
      (user) => {
        console.log('User register with : ' + user);
        this._router.navigateByUrl("/shop");
      }, (error) => {
        console.log(error);
        this.errors = error.errors;
      }
    );
  }

  public getFullyCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const nextYear = new Date().getFullYear() + 1;
    return `${currentYear} - ${nextYear}`
  }
}
