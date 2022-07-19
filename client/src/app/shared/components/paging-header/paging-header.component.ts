import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paging-header',
  templateUrl: './paging-header.component.html',
  styleUrls: ['./paging-header.component.scss']
})
export class PagingHeaderComponent implements OnInit {

  @Input()
  public pageNumber: number = 0;
  @Input()
  public pageSize: number = 0;
  @Input()
  public totalCount: number |undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
