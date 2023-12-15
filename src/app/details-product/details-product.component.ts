import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css'],
})
export class DetailsProductComponent implements OnChanges {
  @Input() product: any;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.product = changes['product']['currentValue']
  }
}
