import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-show-shopping',
  templateUrl: './show-shopping.component.html',
  styleUrls: ['./show-shopping.component.css']
})
export class ShowShoppingComponent implements OnInit{
  cart: any;
  constructor(private _productService: ProductService) { }
  ngOnInit(): void {
    this._productService.getCart().subscribe({
      next: (data) => this.cart = data
    })
  }
  
}
