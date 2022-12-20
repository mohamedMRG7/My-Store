import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css']
})
export class CartInfoComponent implements OnInit,DoCheck {

  stepperEditable = true;
  paymentFormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.minLength(6)]),
    creditNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')])
    

  });
  items= new FormControl(this.itemsCount, [Validators.min(1)])

  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private cartService: CartService) { }

  ngDoCheck(): void {
    
    this.items.setValue(this.itemsCount())
  }

  ngOnInit(): void {
  }

  submit(): void { 
    if(this.paymentFormGroup.valid){
    this.stepperEditable = false;
    this.cartService.setCompletedItems();
    this.cartService.clearCart();
  }
  }
  itemsCount() { return this.cartService.getCount() }
}
