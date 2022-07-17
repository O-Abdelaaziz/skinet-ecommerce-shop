import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  @Input()
  public totalCount: number = 0;
  @Input()
  public pageSize: number = 0;
  @Output()
  pageChanged  = new EventEmitter<number>();


  constructor() {
  }

  ngOnInit(): void {
  }

  onPageChange(value: any) {
    this.pageChanged.emit(value.page);
  }

}
