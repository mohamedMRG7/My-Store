import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { CartBase } from 'src/app/common/cart-base';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends CartBase implements OnInit,OnDestroy {

  products:Product[]=[];
  dataLoaded:boolean=false;
  subscription: Subscription = new Subscription();
  constructor(private productService:ProductService,private _snackBar: MatSnackBar,private cartSevice1:CartService) {
    super(_snackBar,cartSevice1);
  }


  ngOnInit(): void {
   this.subscription= this.productService.getProductList().subscribe(
      res =>{
          this.products=res;
          this.dataLoaded=true;
      }
    );
  }

  addProduct(cart:Cart):void{
      this.addToCart(cart.product,cart.quentity);

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
