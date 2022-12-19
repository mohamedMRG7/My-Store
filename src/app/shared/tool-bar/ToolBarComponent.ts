import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';


@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit, DoCheck {

  productsInCartNumber!: string;
  constructor(private cartSevice: CartService) { }
  ngDoCheck(): void {
    this.productsInCartNumber = this.cartSevice.getCount().toString();  
  }

  ngOnInit(): void {
  }

}
