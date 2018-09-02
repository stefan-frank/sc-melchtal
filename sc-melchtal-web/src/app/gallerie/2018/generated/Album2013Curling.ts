import {Album} from '../Album';

export class Album2013Curling extends Album {
  title = 'Curling';
  date = new Date('2013-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Curling/thumbnail/Foto_4.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Curling/preview/Foto_4.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Curling/image/Foto_4.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Curling/thumbnail/Foto_5.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Curling/preview/Foto_5.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Curling/image/Foto_5.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Curling/thumbnail/Foto_6.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Curling/preview/Foto_6.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Curling/image/Foto_6.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Curling/thumbnail/Foto_7.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Curling/preview/Foto_7.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Curling/image/Foto_7.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Curling/thumbnail/Foto_8.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Curling/preview/Foto_8.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Curling/image/Foto_8.jpg'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
