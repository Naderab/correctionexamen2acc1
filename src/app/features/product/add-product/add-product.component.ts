import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private _productService:ProductService){}
  add(f: any) {
  
    this._productService.addProduct(f.value).subscribe({
      next:()=>alert("Product Successfully added!")
    })
  }
}
