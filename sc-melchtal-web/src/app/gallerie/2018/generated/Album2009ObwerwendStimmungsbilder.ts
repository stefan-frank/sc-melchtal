import {Album} from '../Album';

export class Album2009ObwerwendStimmungsbilder extends Album {
  title = 'Obwerwend  Stimmungsbilder';
  date = new Date('2009-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/thumbnail/IMG_3583.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/preview/IMG_3583.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/image/IMG_3583.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/thumbnail/IMG_3575.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/preview/IMG_3575.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/image/IMG_3575.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/thumbnail/IMG_3577.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/preview/IMG_3577.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/image/IMG_3577.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/thumbnail/IMG_3578.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/preview/IMG_3578.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/image/IMG_3578.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/thumbnail/IMG_3581.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/preview/IMG_3581.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/image/IMG_3581.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/thumbnail/IMG_3582.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/preview/IMG_3582.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/image/IMG_3582.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/thumbnail/IMG_3576.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/preview/IMG_3576.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/image/IMG_3576.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/thumbnail/IMG_3584.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/preview/IMG_3584.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/image/IMG_3584.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/thumbnail/IMG_3585.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/preview/IMG_3585.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/image/IMG_3585.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/thumbnail/IMG_3586.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/preview/IMG_3586.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/image/IMG_3586.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/thumbnail/IMG_3587.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/preview/IMG_3587.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/image/IMG_3587.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/thumbnail/IMG_3588.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/preview/IMG_3588.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2009_Obwerwend_-_Stimmungsbilder/image/IMG_3588.JPG'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
