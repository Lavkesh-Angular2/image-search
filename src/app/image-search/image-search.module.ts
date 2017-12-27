import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSearchRoutingModule } from './image-search-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ImageSearchComponent } from './image-search.component';
import { ImageSearchFilterComponent } from './image-search-filter/image-search-filter.component';
import { ImageSearchResultComponent } from 'app/image-search/image-search-result/image-search-result.component';
import { ImageSearchService } from './service/image-search.service';
import { ImageDetailsComponent } from './image-details/image-details.component';

@NgModule({
  imports: [
    SharedModule,
    ImageSearchRoutingModule
  ],
  declarations: [
    ImageSearchComponent,
    ImageSearchFilterComponent,
    ImageSearchResultComponent,
    ImageDetailsComponent
  ],
  providers: [
    ImageSearchService
  ]
})
export class ImageSearchModule { }
