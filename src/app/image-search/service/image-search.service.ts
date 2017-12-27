import { Injectable, EventEmitter } from '@angular/core';
import { ImageFilter } from '../modal/image-filter.class';
import * as lodash from 'lodash';
import { ImageResult } from '../modal/image-result.interface';

@Injectable()
export class ImageSearchService {

    private imageFilters: ImageFilter[] = [];
    private selectedImageForDetailsView: ImageResult | undefined;
    public imageFilterChangeEvent: EventEmitter<ImageFilter[]> = new EventEmitter();

    constructor() { }

    getImageFilters(): ImageFilter[] {
        return this.imageFilters;
    }

    addImageFilter(filter: ImageFilter) {
        const index: number = this.getImageFilterIndex(filter);
        if (index === -1) {
            this.imageFilters.push(filter);
            this.imageFilterChangeEvent.emit(this.imageFilters);
        }
    }

    removeImageFilter(filter: ImageFilter) {
        const index: number = this.getImageFilterIndex(filter);
        if (index >= 0) {
            lodash.pullAt(this.imageFilters, index);
            this.imageFilterChangeEvent.emit(this.imageFilters);
        }
    }

    getImageFilterIndex(filter: ImageFilter): number {
        if (filter !== null && filter !== undefined) {
            const checkEuqality = (o: ImageFilter) => ImageFilter.equals(o, filter);
            return lodash.findIndex(this.imageFilters, checkEuqality);
        }
        return -1;
    }

    setSelectedImageForDetailsView(selectedImage: ImageResult | undefined) {
        this.selectedImageForDetailsView = selectedImage;
    }

    getSelectedImageForDetailsView(): ImageResult | undefined {
        return this.selectedImageForDetailsView;
    }

    showImageSearchDetailView(): boolean {
        return !(this.selectedImageForDetailsView === null || this.selectedImageForDetailsView === undefined);
    }

}
