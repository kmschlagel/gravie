import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
    SearchComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
