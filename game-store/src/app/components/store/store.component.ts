import { Component, OnInit } from '@angular/core';
import { GameSearchParams } from 'src/app/models/game-search-params.model';
import { GameService } from 'src/app/services/game-service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  searchForGame(searchTerm: string) {
    let params = this.generateNewGameSearchParams(searchTerm);
    this.gameService.search(params).subscribe(results => {
      console.log(results);
    })
  }

  private generateNewGameSearchParams(searchTerm): GameSearchParams {
    let params = new GameSearchParams();
    params.format = 'jsonp';
    params.query = searchTerm;
    params.resources = 'game';
    return params;
  }

}
