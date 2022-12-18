import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[];
  constructor(private http:HttpClient) { }

  getProductList():Observable<Product[]>{
   return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

}
