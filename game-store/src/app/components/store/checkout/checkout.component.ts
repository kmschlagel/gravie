import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { Result } from 'src/app/models/search-result.model';
import { GamesStoreState } from 'src/app/states/game-store.state.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CheckoutComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  selectedItems: Result[] = [];

  @Select(GamesStoreState.selectedItems)
  selectedItems$: Observable<Result[]>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.subscriptions.push(this.selectedItems$.subscribe(items => {
      this.selectedItems = items;
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  routeToStore() {
    this.router.navigate(['store']);
  }

}
