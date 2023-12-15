import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:3000/products';
  apiUrlCart = 'http://localhost:3000/cart';

  constructor(private _http: HttpClient) {}

  addProduct(product: any) {
    return this._http.post(this.apiUrl, product);
  }

  addToCart(product: any) {
    return this._http.post(this.apiUrlCart,product)
  }

  getAllProducts() {
    return this._http.get(this.apiUrl);
  }

  getCart() {
    return this._http.get<any[]>(this.apiUrlCart)
  }
}
