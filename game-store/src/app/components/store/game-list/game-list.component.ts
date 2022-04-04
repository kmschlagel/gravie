import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Result } from 'src/app/models/search-result.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameListComponent implements OnInit {

  @Input()
  searchResults: Result[];

  @Output()
  gameSelected: EventEmitter<Result> = new EventEmitter<Result>();

  constructor() { }

  ngOnInit(): void {

  }

  onGameSelection(result: Result) {
    this.gameSelected.emit(result);
  }

}
