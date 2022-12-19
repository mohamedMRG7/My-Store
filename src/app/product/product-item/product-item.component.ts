import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product!: Product;
  selectFormControl = new FormControl('', Validators.required);
  quntities:Number[]=[1,2,3,4,5,6];
  constructor(private cartService:CartService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addToCart():void{
    this.cartService.addProductToCart(this.product,this.selectFormControl.value);
    this._snackBar.open('Product Added To Cart', 'Dismis')._dismissAfter(2000);
  }

 
}
