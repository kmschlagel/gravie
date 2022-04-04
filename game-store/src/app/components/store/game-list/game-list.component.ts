import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Result } from 'src/app/models/search-result.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameListComponent {

  @Input()
  searchResults: Result[];

  @Output()
  gameSelected: EventEmitter<Result> = new EventEmitter<Result>();

  constructor() { }

  onGameSelection(result: Result) {
    this.gameSelected.emit(result);
  }

}
