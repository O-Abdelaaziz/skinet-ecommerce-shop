import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../../shared/models/Product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  public product: IProduct | undefined ;

  constructor() {
  }

  ngOnInit(): void {
  }

}
