import { FormControl, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Product } from "src/app/models/product";
import { CartService } from "src/app/services/cart/cart.service";

export class CartBase {
    
  selectFormControl = new FormControl('', Validators.required);
  quntities: Number[] = [1, 2, 3, 4, 5, 6,7,8,9,10];
    constructor(private _snackBar1: MatSnackBar,private cartSevice:CartService){
     
    }
    addToCart(product:Product,quentity:number):void{
        this.cartSevice.addProductToCart(product,quentity);
        this._snackBar1.open('Product Added To Cart', 'Dismis')._dismissAfter(2000);
      }
}
