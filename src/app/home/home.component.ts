import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  products: any;
  selectedProduct: any;
  constructor(private _productService: ProductService) { }
  ngOnInit(): void {
    this._productService.getAllProducts().subscribe({
      next : (data) => this.products = data
    })
  }

  addToCart(p: any) {
      this._productService.getCart().subscribe({
        next: (data) => {
          let index = data.filter((pr)=>pr.id === p.id)
          if (index.length === 0) {
            this._productService.addToCart(p).subscribe();
          }
          else {
            alert("Product already exists !")
          }
        },
      });
  }

  selectProduct(p: any) {
    this.selectedProduct = p;
  }
}
