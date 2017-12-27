import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ImageResult } from '../image-search/image-search-result/image-result.interface';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
  searchResults: Array<ImageResult>;
  toggleModal: string;
  slideIndex = 1;

  constructor() {
  }

  ngOnInit() {
    this.searchResults = [
      { name: 'Test 1', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'jkhsdigscjbjasbchscbgajschbj', isSelected: 'none' },
      { name: 'Test 2', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'jkhsdigscjbjasbchscbgajschbj', isSelected: 'none' },
      { name: 'Test 3', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'jkhsdigscjbjasbchscbgajschbj', isSelected: 'none' },
      { name: 'Test 4', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'jkhsdigscjbjasbchscbgajschbj', isSelected: 'none' },
      { name: 'Test 5', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'jkhsdigscjbjasbchscbgajschbj', isSelected: 'none' },
      { name: 'Test 6', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'jkhsdigscjbjasbchscbgajschbj', isSelected: 'none' },
      { name: 'Test 7', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'jkhsdigscjbjasbchscbgajschbj', isSelected: 'none' },
      { name: 'Test 8', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'jkhsdigscjbjasbchscbgajschbj', isSelected: 'none' },
      { name: 'Test 9', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'jkhsdigscjbjasbchscbgajschbj', isSelected: 'none' },
      { name: 'Test 10', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'jkhsdigscjbjasbchscbgajschbj', isSelected: 'none' },
      { name: 'Test 11', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'jkhsdigscjbjasbchscbgajschbj', isSelected: 'none' },
      { name: 'Test 12', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'jkhsdigscjbjasbchscbgajschbj', isSelected: 'none' },
      { name: 'Test 13', thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'jkhsdigscjbjasbchscbgajschbj', isSelected: 'none' },
    ];
  }

  openModal(): void {
    this.toggleModal = 'block';
  };

  closeModal(): void {
    this.toggleModal = 'none';
  };

  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  };

  currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  };

  showSlides (n: number): void {

    _.forEach(this.searchResults, function (value, index) {
      if (n === index) {
        value.isSelected = 'block';
      } else {
        value.isSelected = 'none';
      }
    });
  };

}
