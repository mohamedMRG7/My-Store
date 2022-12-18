import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';

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
  constructor() { }

  ngOnInit(): void {
  }

}
