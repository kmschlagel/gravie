import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GameStoreStateModel } from '../models/game-store-state.model';
import {
  UpdateSearchResults,
  UpdateSelectedItems,
} from './actions/state.actions';
import { patch, append } from '@ngxs/store/operators';

const DEFAULT_STATE = {
  searchResults: [],
  selectedItems: [],
};

@State<GameStoreStateModel>({
  name: 'gameStoreState',
  defaults: DEFAULT_STATE,
})
export class GamesStoreState {
  public static defaultState = DEFAULT_STATE;

  @Selector()
  static searchResults(state: GameStoreStateModel) {
    return state.searchResults;
  }

  @Selector()
  static selectedItems(state: GameStoreStateModel) {
    return state.selectedItems;
  }

  @Action(UpdateSearchResults)
  updateSearchResults(
    { patchState }: StateContext<GameStoreStateModel>,
    { searchResults }: UpdateSearchResults
  ) {
    patchState({ searchResults: searchResults });
  }

  @Action(UpdateSelectedItems)
  updateSelectedItems(
    ctx: StateContext<GameStoreStateModel>,
    { result }: UpdateSelectedItems
  ) {
    let currentState = ctx.getState();
        let updatedState = { ...currentState };
        updatedState.selectedItems = [...updatedState.selectedItems, result];
        ctx.setState(updatedState);
    // ctx.setState(
    //   patch({
    //     selectedItems: append([result]),
    //   })
    // );
  }
}
