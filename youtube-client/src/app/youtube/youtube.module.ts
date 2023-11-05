import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { CardIconComponent } from './components/card-icon/card-icon.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-result/search-results.component';
import { BorderColorDirective } from './directives/border-color.directive';
import { SortDatePipe } from './pipes/sort-date/sort-date.pipe';
import { SortViewPipe } from './pipes/sort-view/sort-view.pipe';
import { SortWordPipe } from './pipes/sort-word/sort-word.pipe';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    CardIconComponent,
    BorderColorDirective,
    SortDatePipe,
    SortViewPipe,
    SortWordPipe,
    MainPageComponent,
    DetailPageComponent
  ],
  imports: [CommonModule, SharedModule],

})
export class YoutubeModule {}
