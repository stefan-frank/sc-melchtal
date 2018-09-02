import {Album} from '../Album';

export class Album2005OberwendSeilbahnEinrichtung extends Album {
  title = 'Oberwend  Seilbahn Einrichtung';
  date = new Date('2005-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/thumbnail/1.05.05.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/preview/1.05.05.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/image/1.05.05.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/thumbnail/IMG_0513.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/preview/IMG_0513.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/image/IMG_0513.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/thumbnail/IMG_0514.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/preview/IMG_0514.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/image/IMG_0514.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/thumbnail/IMG_0515.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/preview/IMG_0515.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/image/IMG_0515.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/thumbnail/IMG_0516.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/preview/IMG_0516.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/image/IMG_0516.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/thumbnail/IMG_0517.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/preview/IMG_0517.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/image/IMG_0517.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/thumbnail/IMG_0518.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/preview/IMG_0518.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/image/IMG_0518.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/thumbnail/Oberwend.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/preview/Oberwend.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2005_Oberwend_-_Seilbahn_Einrichtung/image/Oberwend.JPG'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
