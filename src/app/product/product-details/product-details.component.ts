import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {  Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit ,OnDestroy{
  selectFormControl = new FormControl('', Validators.required);
  quntities:Number[]=[1,2,3,4,5,6];
  product!: Product;
  subscriber:Subscription=new Subscription()
  constructor(private router:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.subscriber= this.router.queryParams.subscribe(params=> {
     this.productService.getProductByID(params['product']).subscribe(product => {
          this.product=product;
        });
    });

    
  }


  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
