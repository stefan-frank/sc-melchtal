import {Album} from '../Album';

export class Album2014Jassen extends Album {
  title = 'Jassen';
  date = new Date('2014-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Jassen/thumbnail/Foto 1 (2).JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Jassen/preview/Foto 1 (2).JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Jassen/image/Foto 1 (2).JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Jassen/thumbnail/Foto 2.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Jassen/preview/Foto 2.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Jassen/image/Foto 2.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Jassen/thumbnail/Foto 3 (2).JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Jassen/preview/Foto 3 (2).JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Jassen/image/Foto 3 (2).JPG'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
