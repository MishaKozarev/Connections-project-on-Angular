import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Store } from '@ngrx/store';
import { map, Observable, switchMap, tap } from 'rxjs';

import { paginationAddInfoAction } from '../../../store/actions/pagination/pagination.actions';
import { Item } from '../../models/search-item.model';
import VideoItems, { SearchResponse } from '../../models/search-response.model';
=======
import { map, mergeMap, Observable } from 'rxjs';

import { Item } from '../../models/search-item.model';
import { SearchResponse } from '../../models/search-response.model';
>>>>>>> main

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
<<<<<<< HEAD
  public SEARCH_URL: string = 'search?';
  public SEARCH_VIDEO: string = 'videos?';

  constructor(
    private http: HttpClient,
    private store: Store
  ) {}

  public getList(textInput: string = '', maxItems: string = '20') {
=======
  private readonly SEARCH_URL: string = 'search?';
  private readonly SEARCH_VIDEO: string = 'videos?';

  constructor(private http: HttpClient) {}

  public getList(
    textInput: string = '',
    maxItems: string = '10'
  ): Observable<SearchResponse> {
>>>>>>> main
    const params: HttpParams = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', maxItems)
      .set('q', textInput);
    return this.http.get<SearchResponse>(`${this.SEARCH_URL}`, { params }).pipe(
<<<<<<< HEAD
      tap((searchResponse) => this.savePagesToken(searchResponse)),
=======
>>>>>>> main
      map((response: SearchResponse) => {
        const itemsId = response.items.map((item) => item.id.videoId).join(',');
        return itemsId;
      }),
<<<<<<< HEAD
      switchMap((itemsId) => {
        return this.http.get<VideoItems>(
          `${this.SEARCH_VIDEO}&id=${itemsId}&part=snippet,statistics`
        );
      })
    );
  }

  public getVideosOnPage(query: string, token: string, maxResults = 20) {
    const params: HttpParams = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', maxResults)
      .set('q', query)
      .set('pageToken', token);
    return this.http.get<SearchResponse>(`${this.SEARCH_URL}`, { params }).pipe(
      tap((searchResponse) => this.savePagesToken(searchResponse)),
      map((videoResponse: SearchResponse) => {
        const videoItemsIds: string = videoResponse.items
          .map((items) => items.id.videoId)
          .join(',');
        return videoItemsIds;
      }),
      switchMap((videoItemsIds) => {
        return this.http.get<VideoItems>(
          `${this.SEARCH_VIDEO}&id=${videoItemsIds}&part=snippet,statistics`
        );
      })
    );
  }

  private savePagesToken(searchResponse: SearchResponse) {
    const { nextPageToken, prevPageToken } = searchResponse;
    this.store.dispatch(
      paginationAddInfoAction({
        info: {
          nextPageToken: nextPageToken || '',
          prevPageToken: prevPageToken || ''
        }
=======
      mergeMap((itemsId) => {
        const params: HttpParams = new HttpParams()
          .set('id', itemsId)
          .set('part', 'snippet,statistics');
        return this.http.get<SearchResponse>(`${this.SEARCH_VIDEO}`, {
          params
        });
>>>>>>> main
      })
    );
  }

  getItemById(id: string): Observable<Item[]> {
    const params = new HttpParams()
      .set('part', 'snippet,statistics')
      .set('id', id);
    return this.http
<<<<<<< HEAD
      .get<VideoItems>(`${this.SEARCH_VIDEO}`, { params })
=======
      .get<SearchResponse>(`${this.SEARCH_VIDEO}`, { params })
>>>>>>> main
      .pipe(map((response) => response.items));
  }
}
