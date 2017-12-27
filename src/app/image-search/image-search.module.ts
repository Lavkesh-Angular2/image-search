import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSearchRoutingModule } from './image-search-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ImageSearchComponent } from './image-search.component';
import { ImageSearchFilterComponent } from './image-search-filter/image-search-filter.component';
import { ImageSearchResultComponent } from 'app/image-search/image-search-result/image-search-result.component';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

@NgModule({
  imports: [
    SharedModule,
    ImageSearchRoutingModule
  ],
  declarations: [
    ImageSearchComponent,
    ImageSearchFilterComponent,
    ImageSearchResultComponent,
    ImageViewerComponent
  ]
})
export class ImageSearchModule { }
