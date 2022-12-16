import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  selectFormControl = new FormControl('', Validators.required);
  quntities:Number[]=[1,2,3,4,5,6];

  constructor() { }

  ngOnInit(): void {
  }

}
