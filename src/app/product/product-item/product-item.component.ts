import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartBase } from 'src/app/common/cart-base';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent extends CartBase implements OnInit {
  @Input()
  product!: Product;

  constructor(private cartService:CartService,private _snackBar: MatSnackBar) {super(_snackBar,cartService) }

  ngOnInit(): void {
  }

 
 
}
