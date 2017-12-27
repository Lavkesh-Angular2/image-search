import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ImageResult } from './image-result.interface';

@Component({
  selector: 'app-image-search-result',
  templateUrl: './image-search-result.component.html',
  styleUrls: ['./image-search-result.component.css']
})
export class ImageSearchResultComponent implements OnInit {

  searchInputs: Array<string>;
  searchResults: Array<ImageResult>;

  constructor() { }

  ngOnInit() {
    this.searchInputs = [];
    this.searchResults = [
      { name: 'Test 1', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: '', isSelected: 'none' },
      { name: 'Test 2', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: '', isSelected: 'none' },
      { name: 'Test 3', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: '', isSelected: 'none' },
      { name: 'Test 4', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: '', isSelected: 'none' },
      { name: 'Test 5', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: '', isSelected: 'none' },
      { name: 'Test 6', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: '', isSelected: 'none' },
      { name: 'Test 7', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: '', isSelected: 'none' },
      { name: 'Test 8', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: '', isSelected: 'none' },
      { name: 'Test 9', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: '', isSelected: 'none' },
      { name: 'Test 10', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: '', isSelected: 'none' },
      { name: 'Test 11', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: '', isSelected: 'none' },
      { name: 'Test 12', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: '', isSelected: 'none' },
      { name: 'Test 13', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: '', isSelected: 'none' },];
  }

  hasSearchInput(): Boolean {
    return this.searchInputs.length > 0;
  };

  addSearchInput(search: string): void {
    const searchString = search.trim();
    if (searchString.length > 0) {
      const checkEuqality = (o: string) => o.toLowerCase() === searchString.toLowerCase();
      const index: number = _.findIndex(this.searchInputs, checkEuqality);
      if (index === -1) {
        this.searchInputs.push(searchString);
      }
    }
  }

  removeSearchInput(search: string): void {
    const checkEuqality = (o: string) => o.toLowerCase() !== search.toLowerCase();
    this.searchInputs = _.remove(this.searchInputs, checkEuqality);
  }

}
