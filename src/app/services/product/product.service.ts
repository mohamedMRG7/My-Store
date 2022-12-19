import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  baseUrl:string='https://fakestoreapi.com/products';
  constructor(private http:HttpClient) { }

  getProductList():Observable<Product[]>{
   return this.http.get<Product[]>(this.baseUrl);
  }


  getProductByID(id:Number):Observable<Product>{
    return this.http.get<Product>(this.baseUrl+'/'+id);
  }

}
