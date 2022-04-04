import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GameStoreStateModel } from '../models/game-store-state.model';
const DEFAULT_STATE = {
  searchResults: [],
  selectedItems: []
};

@State<GameStoreStateModel>({
  name: 'transactionalEmailInstall',
  defaults: DEFAULT_STATE
})
export class GamesStoreState {}
