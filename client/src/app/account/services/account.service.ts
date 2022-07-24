import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {map} from "rxjs/operators";
import {IUser} from "../../shared/models/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public readonly baseUrl: string = environment.baseUrl;
  private currentUserSource = new BehaviorSubject<IUser | null>(null);
  public currentUser$ = this.currentUserSource.asObservable();

  constructor(private _httpClient: HttpClient, private _router: Router) {
  }

  public login(values: any) {
    return this._httpClient.post<IUser>(`${this.baseUrl}/account/login`, values)
      .pipe(
        map((user: IUser) => {
          if (user) {
            localStorage.setItem('token', user.token);
            this.currentUserSource.next(user);
          }
        })
      )
  }

  public register(values: any) {
    return this._httpClient.post<IUser>(`${this.baseUrl}/account/register`, values)
      .pipe(
        map((user: IUser) => {
          if (user) {
            localStorage.setItem('token', user.token);
          }
        })
      )
  }

  public logout() {
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this._router.navigateByUrl('/');
  }

  public checkEmailExist(email: string) {
    return this._httpClient.get(`${this.baseUrl}/account/emailexists?email=${email}`);
  }
}
