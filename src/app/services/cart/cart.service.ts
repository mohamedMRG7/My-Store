import { Injectable } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList:Cart[]=[];
  completedItems:Cart[]=[];
  constructor() { }


  getProductsInCart():Cart[]{
    return this.cartList;
  }
  
  addProductToCart(product:Product,quentity:number):void
  {
    this.cartList.push({product,quentity});
  }

  removeFromCart(id:Number):void{
   const index =this.cartList.findIndex(p =>{p.product.id===id})
    this.cartList.splice(index,1);
  }

  setCompletedItems()
  {
    this.cartList.forEach(i => this.completedItems.push(i));
  }
  getCompletedItems():Cart[]{
    return this.completedItems;
  }
  getCount():Number{
    return this.cartList.length;
  }
  clearCart():void{this.cartList.splice(0,this.cartList.length)}
}
