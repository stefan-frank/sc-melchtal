import {Gallery} from './Gallery';
import {AlbumFactory} from './AlbumFactory';
import {GalleryFactory} from './GalleryFactory';

export class Library {

  galleries: Array<Gallery>;
  currentYear: number;
  private galleryFactory: GalleryFactory;
  private albumFactory: AlbumFactory;

  constructor() {
    this.galleryFactory = new GalleryFactory();
    this.albumFactory = new AlbumFactory();
    this.albumFactory.getAllAlbums().forEach(value => this.galleryFactory.push(value));
    this.galleries = this.galleryFactory.getGalleries();
    this.currentYear = this.galleryFactory.currentYear;
  }

  /*public years(): Array<number> {
      const years: Array<number> = [];
      this.map.forEach(((value, key) => years.push(key)));
      return years;
    }*/


}
