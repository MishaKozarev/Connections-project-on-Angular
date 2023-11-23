import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { paginationChangePageAction } from 'src/app/store/actions/pagination.actions';
import {
  youtubeClearCardsAction,
  youtubeSearchOnPageAction
} from 'src/app/store/actions/youtube-card.actions';
import { selectCustomCardsItems } from 'src/app/store/selectors/custom-card.selectors';
import { selectPaginationInfo } from 'src/app/store/selectors/pagination.selectors';
import { selectYoutubeCardItems } from 'src/app/store/selectors/youtube-card.selectors';
import { PaginationInfo } from 'src/app/store/state.model';

import { Item } from '../../models/search-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public youtubeCard$: Observable<Item[]> = this.store.select(
    selectYoutubeCardItems
  );
  public customCard$: Observable<Item[]> = this.store.select(
    selectCustomCardsItems
  );
  public pageInfo$: Observable<PaginationInfo> =
    this.store.select(selectPaginationInfo);
  public currentPage!: number;
  public prevToken = '';
  public nextToken = '';
  constructor(
    private readonly store: Store,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.pageInfo$.subscribe((pageInfo) => {
      this.currentPage = pageInfo.page;
      this.prevToken = pageInfo.prevPageToken;
      this.nextToken = pageInfo.nextPageToken;
    });
  }

  public increasePage() {
    if (this.nextToken !== '') {
      const query = localStorage.getItem('Query') || '';
      this.store.dispatch(
        paginationChangePageAction({ page: this.currentPage + 1 })
      );
      this.store.dispatch(youtubeClearCardsAction());
      this.store.dispatch(
        youtubeSearchOnPageAction({
          query,
          token: this.nextToken
        })
      );
    }
  }

  public decreasePage() {
    const query = localStorage.getItem('Query') || '';
    if (this.currentPage > 1) {
      this.store.dispatch(
        paginationChangePageAction({ page: this.currentPage - 1 })
      );
      this.store.dispatch(youtubeClearCardsAction());
      this.store.dispatch(
        youtubeSearchOnPageAction({
          query,
          token: this.prevToken
        })
      );
    }
  }
}
