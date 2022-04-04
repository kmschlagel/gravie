import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/store/search/search.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [
  { path: 'index.html', component: StoreComponent },
  { path: '', component: StoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
