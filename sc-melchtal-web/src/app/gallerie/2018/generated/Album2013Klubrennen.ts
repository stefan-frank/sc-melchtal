import {Album} from '../Album';

export class Album2013Klubrennen extends Album {
  title = 'Klubrennen';
  date = new Date('2013-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/thumbnail/PICT0018.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/preview/PICT0018.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/image/PICT0018.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/thumbnail/PICT0004.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/preview/PICT0004.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/image/PICT0004.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/thumbnail/PICT0012.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/preview/PICT0012.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/image/PICT0012.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/thumbnail/PICT0013.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/preview/PICT0013.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/image/PICT0013.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/thumbnail/PICT0015.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/preview/PICT0015.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/image/PICT0015.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/thumbnail/PICT0016.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/preview/PICT0016.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/image/PICT0016.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/thumbnail/PICT0005.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/preview/PICT0005.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/image/PICT0005.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/thumbnail/PICT0020.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/preview/PICT0020.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/image/PICT0020.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/thumbnail/PICT0023.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/preview/PICT0023.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/image/PICT0023.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/thumbnail/PICT0024.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/preview/PICT0024.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/image/PICT0024.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/thumbnail/PICT0025.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/preview/PICT0025.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/image/PICT0025.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/thumbnail/PICT0027.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/preview/PICT0027.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/image/PICT0027.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/thumbnail/PICT0028.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/preview/PICT0028.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Klubrennen/image/PICT0028.jpg'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
