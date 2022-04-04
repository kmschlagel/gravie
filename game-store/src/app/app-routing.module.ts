import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/store/checkout/checkout.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'index.html', component: StoreComponent },
  { path: 'store', component: StoreComponent },
  { path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
