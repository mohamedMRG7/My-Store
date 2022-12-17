import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ToolBarComponent } from './shared/tool-bar/tool-bar.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ProductListComponent } from './product/product-list/product-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import {MatStepperModule} from '@angular/material/stepper';
import { CartInfoComponent } from './cart/cart-info/cart-info.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { PaymentInfoComponent } from './cart/payment-info/payment-info.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartInfoComponent,
    CartItemComponent,
    PaymentInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatSlideToggleModule, MatToolbarModule
    , MatIconModule, MatBadgeModule, MatCardModule
    , MatButtonModule, MatFormFieldModule, MatSelectModule,FormsModule, ReactiveFormsModule,MatInputModule,MatGridListModule,MatStepperModule
    ,MatTabsModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
