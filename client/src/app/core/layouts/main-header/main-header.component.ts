import {Component, OnInit} from '@angular/core';
import {BreadcrumbService} from "xng-breadcrumb";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  public breadcrumbs$: Observable<any[]> | undefined;

  constructor(private _breadcrumbService: BreadcrumbService,
  ) {
  }

  ngOnInit(): void {
    this.breadcrumbs$ = this._breadcrumbService.breadcrumbs$;
  }

}
