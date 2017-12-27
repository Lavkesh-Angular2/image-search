import { Component, OnInit } from '@angular/core';
import { ImageSearchService } from '../service/image-search.service';
import { ImageResult } from '../modal/image-result.interface';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  selectedImage: ImageResult | undefined;

  constructor(private imageSearchService: ImageSearchService) { }

  ngOnInit() {
    this.selectedImage = this.imageSearchService.getSelectedImageForDetailsView();
  }

  goToImageSearchTileView(): void {
    this.imageSearchService.setSelectedImageForDetailsView(undefined);
  }
}
