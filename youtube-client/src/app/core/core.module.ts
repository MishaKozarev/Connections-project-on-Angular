import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from '../app-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [FilterComponent, HeaderComponent, NotFoundComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  exports: [HeaderComponent]
})
export class CoreModule {}
