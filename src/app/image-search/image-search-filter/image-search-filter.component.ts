import { Component, OnInit } from '@angular/core';
import { Constant } from '../../shared/utilities/constant.class';
import { ImageSearchService } from '../service/image-search.service';
import { Filter } from '../../shared/modal/filter.interface';
import { ImageFilter } from '../modal/image-filter.class';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-image-search-filter',
  templateUrl: './image-search-filter.component.html',
  styleUrls: ['./image-search-filter.component.css']
})
export class ImageSearchFilterComponent implements OnInit {
  isbnFilter: string = '';
  titleFilter: string = '';
  authorFilter: string = '';
  imageTypeFilter: string = '';
  publicationTypeFilter: string[] = [];
  copyrightFilter: string = '';
  imageFilter: string = 'N';

  publicationTypes: any[] = [];

  FILTER_CONSTANT = Constant.IMAGE_FILTER;

  constructor(private imageSearchService: ImageSearchService) {
  }

  ngOnInit() {
    this.publicationTypes = [
      { name: 'Type 1', code: 'TYPE_1'},
      { name: 'Type 2', code: 'TYPE_2'}
    ];
  }

  isEmptyInput(input: string | null | undefined): boolean {
    const temp = (input !== null && input !== undefined) ? input.trim() : '';
    return temp.length === 0;
  }

  addFilterInSearch(filter: string, type: Filter): void {
    console.log(`Filter type: ${type} => ${filter}`);
    const imageFilter: ImageFilter = {} as ImageFilter;
    imageFilter.type = type;
    imageFilter.value = filter;
    this.imageSearchService.addImageFilter(imageFilter);
  }

  onPublicationTypeFilterChange(event: any) {
    console.log(event);
    console.log(`publicationTypeFilter => ${this.publicationTypeFilter}`);
  }

}
