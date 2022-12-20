import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartInfoComponent } from './cart/cart-info/cart-info.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [{path:'products',component:ProductListComponent},{path:'productDetails',component:ProductDetailsComponent},{path:"cart",component:CartInfoComponent},{path:'',redirectTo:'products',pathMatch:'full'},{path: '**', redirectTo: 'products',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
