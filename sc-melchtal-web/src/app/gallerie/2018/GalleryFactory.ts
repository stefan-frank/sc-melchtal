import {Album} from './Album';
import {Gallery} from './Gallery';

export class GalleryFactory {
  public map: Map<number, Gallery> = new Map<number, Gallery>();
  public currentYear: number;
  private sortedGalleryList: Array<Gallery> = [];
  private sortedYearList: Array<number> = [];

  public getGalleryByYear(year: number) {
    let gallery: Gallery;
    if (!this.map.has(year)) {
      gallery = new Gallery(year);
      this.map.set(year, gallery);

      this.sortedYearList.push(gallery.year);
      this.sortedYearList.sort((n1, n2) => {
        if (n1 > n2) {
          return -1;
        }
        if (n1 < n2) {
          return 1;
        }
        if (n1 === n2) {
          return 0;
        }
      });
      console.log('SortedYearList: ' + this.sortedYearList);
      this.sortedGalleryList = [];
      for (let i = 0; i < this.sortedYearList.length; i++) {
        this.sortedGalleryList.push(this.map.get(this.sortedYearList[i]));
      }
      console.log('SortedGalleryList: ' + this.sortedGalleryList);
      console.log('Gallery for year ' + year + ' created');
      this.currentYear = this.sortedYearList[0];
    } else {
      gallery = this.map.get(year);
    }
    return gallery;
  }

  public push(album: Album) {
    const year = album.date.getFullYear();
    const gallery = this.getGalleryByYear(year);
    gallery.albums.push(album);
    console.log('Added ' + album + ' in ' + gallery);
  }

  public getGalleries(): Array<Gallery> {
    return this.sortedGalleryList;
  }

}
