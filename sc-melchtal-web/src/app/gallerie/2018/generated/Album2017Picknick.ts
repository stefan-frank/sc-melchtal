import {Album} from '../Album';

export class Album2017Picknick extends Album {
  title = 'Picknick';
  date = new Date('2017-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/thumbnail/Foto 27.08.17, 13 06 10.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/preview/Foto 27.08.17, 13 06 10.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/image/Foto 27.08.17, 13 06 10.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/thumbnail/Foto 27.08.17, 13 06 13.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/preview/Foto 27.08.17, 13 06 13.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/image/Foto 27.08.17, 13 06 13.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/thumbnail/Foto 27.08.17, 13 06 17.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/preview/Foto 27.08.17, 13 06 17.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/image/Foto 27.08.17, 13 06 17.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/thumbnail/Foto 27.08.17, 13 06 20.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/preview/Foto 27.08.17, 13 06 20.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/image/Foto 27.08.17, 13 06 20.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/thumbnail/Foto 27.08.17, 13 06 23.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/preview/Foto 27.08.17, 13 06 23.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/image/Foto 27.08.17, 13 06 23.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/thumbnail/Foto 27.08.17, 13 06 26.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/preview/Foto 27.08.17, 13 06 26.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/image/Foto 27.08.17, 13 06 26.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/thumbnail/Foto 27.08.17, 13 06 29.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/preview/Foto 27.08.17, 13 06 29.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/image/Foto 27.08.17, 13 06 29.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/thumbnail/Foto 27.08.17, 13 06 32.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/preview/Foto 27.08.17, 13 06 32.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/image/Foto 27.08.17, 13 06 32.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/thumbnail/Foto 27.08.17, 13 06 35.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/preview/Foto 27.08.17, 13 06 35.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Picknick/image/Foto 27.08.17, 13 06 35.jpg'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
