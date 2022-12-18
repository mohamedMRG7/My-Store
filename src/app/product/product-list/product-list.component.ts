import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {

  products:Product[]=[];
  dataLoaded:boolean=false;
  subscription: Subscription = new Subscription();
  constructor(private productService:ProductService) { }


  ngOnInit(): void {
   this.subscription= this.productService.getProductList().subscribe(
      res =>{
          this.products=res;
          this.dataLoaded=true;
      }
    );
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
