import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../products/products.service';


@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http: HttpClient) { }

  getProduct(id: number) {
    return this.http.get<Product>("https://fakestoreapi.com/products/" + id);
  }
}
