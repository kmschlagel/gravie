import { Result } from "src/app/models/search-result.model";

export class UpdateSearchResults {
  static readonly type = '[gameStoreState] UpdateSearchResults';
  constructor(public searchResults: Result[]) {}
}

export class UpdateSelectedItems {
  static readonly type = '[gameStoreState] UpdateSelectedItems';
  constructor(public result: Result) {}
}
