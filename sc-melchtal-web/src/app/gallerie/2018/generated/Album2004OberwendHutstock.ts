import {Album} from '../Album';

export class Album2004OberwendHutstock extends Album {
  title = 'Oberwend  Hutstock';
  date = new Date('2004-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/thumbnail/IMG_0336.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/preview/IMG_0336.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/image/IMG_0336.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/thumbnail/IMG_0345.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/preview/IMG_0345.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/image/IMG_0345.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/thumbnail/IMG_0350.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/preview/IMG_0350.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/image/IMG_0350.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/thumbnail/IMG_0353.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/preview/IMG_0353.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/image/IMG_0353.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/thumbnail/IMG_0354.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/preview/IMG_0354.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/image/IMG_0354.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/thumbnail/IMG_0359.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/preview/IMG_0359.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/image/IMG_0359.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/thumbnail/IMG_0361.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/preview/IMG_0361.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/image/IMG_0361.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/thumbnail/IMG_0362.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/preview/IMG_0362.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2004_Oberwend_-_Hutstock/image/IMG_0362.JPG'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
