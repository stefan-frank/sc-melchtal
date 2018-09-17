import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {environment} from '../../../environments/environment';

const DEFAULT_GALLERY_OPTIONS: NgxGalleryOptions[] = [
  {
    imageAnimation: NgxGalleryAnimation.Slide,
    fullWidth: false,
    imageInfinityMove: true,
    imageAutoPlay: false,
    imageSwipe: true,
    imageAutoPlayInterval: 5001,
    previewForceFullscreen: false,
    previewSwipe: true,
    thumbnailsColumns: 5,
    thumbnails: true
  }, {
  imageAnimation: NgxGalleryAnimation.Slide,
  fullWidth: true,
  breakpoint: 400,
  imageInfinityMove: true,
  imageAutoPlay: false,
  imageSwipe: true,
  imageAutoPlayInterval: 5001,
    previewForceFullscreen: true,
    previewSwipe: true,
  thumbnailsColumns: 5,
  thumbnails: false
}];

export class Album {
  static albums: Album[] = [];
  static BASE_URL = environment.galleryBaseUrl;
  public title: string;
  public date: Date;
  public gallery: NgxGalleryImage[];
  public options = DEFAULT_GALLERY_OPTIONS;

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}





