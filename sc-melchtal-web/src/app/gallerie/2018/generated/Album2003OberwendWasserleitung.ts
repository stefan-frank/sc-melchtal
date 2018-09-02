import {Album} from '../Album';

export class Album2003OberwendWasserleitung extends Album {
  title = 'Oberwend  Wasserleitung';
  date = new Date('2003-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/thumbnail/DSCN0134.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/preview/DSCN0134.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/image/DSCN0134.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/thumbnail/DSCN0135.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/preview/DSCN0135.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/image/DSCN0135.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/thumbnail/DSCN0137.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/preview/DSCN0137.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/image/DSCN0137.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/thumbnail/DSCN0138.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/preview/DSCN0138.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/image/DSCN0138.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/thumbnail/DSCN0139.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/preview/DSCN0139.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/image/DSCN0139.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/thumbnail/DSCN0140.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/preview/DSCN0140.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/image/DSCN0140.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/thumbnail/DSCN0141.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/preview/DSCN0141.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2003_Oberwend_-_Wasserleitung/image/DSCN0141.JPG'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
