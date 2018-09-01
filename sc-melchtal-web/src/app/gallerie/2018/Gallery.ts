import {Album} from './Album';
import {Library} from './Library';
import {AlbumFactory} from './AlbumFactory';

export class Gallery {

  static map: Map<number, Gallery> = new Map<number, Gallery>();
  public year: number;
  public albums: Array<Album> = [];

  constructor(year: number) {
    this.year = year;
  }

  static getGalleryByYear(year: number) {
    let gallery: Gallery;
    if (!this.map.has(year)) {
      gallery = new Gallery(year);
      this.map.set(year, gallery);
      console.log('Gallery for year ' + year + ' created');
      Library.getLibrary().addGallery(gallery);
    } else {
      gallery = this.map.get(year);
    }
    return gallery;
  }

  static push(album: Album) {
    const year = album.date.getFullYear();
    const gallery = Gallery.getGalleryByYear(year);
    gallery.albums.push(album);
    console.log('Added ' + album + ' in ' + gallery);
  }

  static init() {
    AlbumFactory.init();
    AlbumFactory.getAllAlbums().forEach(value => this.push(value));
  }

  public toString() {
    return 'Gallery (' + this.year + ') [count=' + this.albums.length + ']';
  }

}
