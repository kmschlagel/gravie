import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { AppConstants } from '../app.constants';
import { GameSearchParams } from '../models/game-search-params.model';
import { SearchResponse } from '../models/search-result.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private SEARCH_URL =
    'http://www.giantbomb.com/api/search?api_key=' + AppConstants.apiKey;

  constructor(private httpClient: HttpClient) {}

  search(gameSearchParams: GameSearchParams): Observable<SearchResponse> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      params: new HttpParams(),
    };

    // add search params to URL
    if (!UtilsService.isEmpty(gameSearchParams)) {
      for (const [key, value] of Object.entries(gameSearchParams)) {
        this.SEARCH_URL = this.SEARCH_URL + '&' + `${key}` + '=' + `${value}`;
      }
    }

    return this.httpClient.jsonp<SearchResponse>(this.SEARCH_URL, 'json_callback')
      .pipe(
        catchError((error) => {
          //TODO: handle error
          return of<SearchResponse>();
        })
      );
  }
}
