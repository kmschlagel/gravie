import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { GameSearchParams } from 'src/app/models/game-search-params.model';
import { Result, SearchResponse } from 'src/app/models/search-result.model';
import { GameService } from 'src/app/services/game-service';
import { UpdateSearchResults, UpdateSelectedItems } from 'src/app/states/actions/state.actions';
import { GamesStoreState } from 'src/app/states/game-store.state.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private gameService: GameService, private store: Store) { }

  @Select(GamesStoreState.searchResults)
  searchResults$: Observable<Result[]>;

  ngOnInit(): void {
  }

  searchForGame(searchTerm: string) {
    let params = this.generateNewGameSearchParams(searchTerm);
    this.gameService.search(params).subscribe(searchResponse => {
      // console.log(searchResponse);
      this.store.dispatch(new UpdateSearchResults(searchResponse.results));
    })
  }

  addGameForRental(gameForRent: Result) {
    this.store.dispatch(new UpdateSelectedItems(gameForRent));
  }

  private generateNewGameSearchParams(searchTerm): GameSearchParams {
    let params = new GameSearchParams();
    params.format = 'jsonp';
    params.query = searchTerm;
    params.resources = 'game';
    return params;
  }

}
