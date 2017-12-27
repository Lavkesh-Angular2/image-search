import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ImageSearchService } from '../service/image-search.service';
import { ImageFilter } from '../modal/image-filter.class';
import { ImageResult } from '../modal/image-result.interface';

@Component({
  selector: 'app-image-search-result',
  templateUrl: './image-search-result.component.html',
  styleUrls: ['./image-search-result.component.css']
})
export class ImageSearchResultComponent implements OnInit {

  searchInput: string;
  imageFilters: ImageFilter[] = [];
  searchResults: ImageResult[] = [];

  constructor(private imageSearchService: ImageSearchService) {
  }

  ngOnInit() {
    this.searchResults = [
      { name: 'Test 1', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 2', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 3', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 4', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 5', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 6', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 7', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 8', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 9', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 10', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 11', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 12', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { name: 'Test 13', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg' }];

    this.imageFilters = this.imageSearchService.getImageFilters();

    const imageFilterChangeEvent = this.imageSearchService.imageFilterChangeEvent;
    imageFilterChangeEvent.subscribe((imageFilters: ImageFilter[]) => { this.imageFilters = imageFilters; })
  }

  hasSearchInput(): Boolean {
    return this.imageFilters.length > 0;
  };

  removeSearchInput(filter: ImageFilter): void {
    this.imageSearchService.removeImageFilter(filter);
  }

  displayImageDetailSection(selectedImageResult: ImageResult) {
    this.imageSearchService.setSelectedImageForDetailsView(selectedImageResult);
  }

  displaySearchResultTileView(): boolean {
    return !this.imageSearchService.showImageSearchDetailView();
  }

  displaySearchResultDetailsView(): boolean {
    return this.imageSearchService.showImageSearchDetailView();
  }

}
