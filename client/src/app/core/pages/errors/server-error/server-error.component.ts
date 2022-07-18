import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {
  public error: any;

  constructor(private _router: Router) {
    this.getErrorsFromCurrentRouter();
  }

  ngOnInit(): void {
  }

  getErrorsFromCurrentRouter() {
    const navigation = this._router.getCurrentNavigation();
    this.error = navigation && navigation.extras && navigation.extras.state && navigation.extras.state['error'];
  }

}
