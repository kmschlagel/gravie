import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './store/search/search.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { StoreComponent } from './store/store.component';
import { GameListComponent } from './store/game-list/game-list.component';

@NgModule({
  declarations: [SearchComponent, CheckoutComponent, StoreComponent, GameListComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
})
export class ComponentsModule {}
