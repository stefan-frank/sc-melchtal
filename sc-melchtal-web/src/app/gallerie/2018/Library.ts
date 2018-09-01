import {Gallery} from './Gallery';

export class Library {
  private static instance: Library;

  private map: Map<number, Gallery> = new Map<number, Gallery>();
  private sortedYearList: Array<number> = [];
  private sortedGalleryList: Array<Gallery> = [];

  static getLibrary() {
    if (Library.instance == null) {
      Library.instance = new Library();
      console.log('Created static Library instance.');
      Gallery.init();
    }
    return Library.instance;
  }

  private static compare(n1: number, n2: number) {
    if (n1 > n2) {
      return 1;
    }
    if (n1 < n2) {
      return -1;
    }
    if (n1 === n2) {
      return 0;
    }
  }

  public addGallery(gallery: Gallery) {
    Library.instance.map.set(gallery.year, gallery);

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
  }

  public galleries(): Array<Gallery> {
    return this.sortedGalleryList;
  }

  public years(): Array<number> {
    const years: Array<number> = [];
    this.map.forEach(((value, key) => years.push(key)));
    return years;
  }

}
