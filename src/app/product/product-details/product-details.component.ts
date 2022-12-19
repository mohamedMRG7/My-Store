import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartBase } from 'src/app/common/cart-base';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent extends CartBase implements OnInit, OnDestroy {
  
  product: Product={description:'',id:0,image:'',price:1,rating:{rate:0},title:''};
  subscriber: Subscription = new Subscription()
  constructor(private router: ActivatedRoute, private productService: ProductService, private cartService: CartService, private  _snackBar: MatSnackBar) {
    super(_snackBar,cartService);
  }

  ngOnInit(): void {
    this.subscriber = this.router.queryParams.subscribe(params => {
      this.productService.getProductByID(params['product']).subscribe(product => {
        this.product = product;
      });
    });


  }


  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
