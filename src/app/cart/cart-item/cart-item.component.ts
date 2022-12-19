import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart/cart.service';

interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit,DoCheck {
  @Input() pageType:string='';
  cartItems:Cart[]=[]//[{product:{description:'',id:1,image:'',price:1,title:''},quentity:1}];
  completedItems:Cart[]=[];
  displayedColumns: string[] = ['item', 'cost','amount'];
  dataSource=new MatTableDataSource(this.cartItems);
  

 constructor(private cartService:CartService){}
  ngDoCheck(): void {
    this.cartItems=this.cartService.getProductsInCart();
    this.dataSource._updateChangeSubscription();

  }
  ngOnInit(): void {
    this.cartItems=this.cartService.getProductsInCart();
    if(!this.isSummary()){
    this.dataSource=new MatTableDataSource(this.cartItems);
    this.dataSource._updateChangeSubscription();
    }else{
      this.completedItems=this.cartService.getCompletedItems();
      this.dataSource=new MatTableDataSource(this.completedItems);
      this.dataSource._updateChangeSubscription();
        
    }
  }



  
  getTotalCost() {
    if(!this.isSummary())
    return this.cartItems.map(p => (p.product.price)*(p.quentity)).reduce((acc, value) => acc + value, 0);
    else
    return this.completedItems.map(p => (p.product.price)*(p.quentity)).reduce((acc, value) => acc + value, 0);
  }

  isSummary():boolean{
    return this.pageType==='summary';
  }
  checkQuentity(cartItem:Cart):void{
    if(cartItem.quentity===0){
      this.cartService.removeFromCart(cartItem.product.id);
    }
  }
}
