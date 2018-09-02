import {Album} from '../Album';

export class Album2017Langlaufplausch extends Album {
  title = 'Langlaufplausch';
  date = new Date('2017-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/thumbnail/P1020240.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/preview/P1020240.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/image/P1020240.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/thumbnail/P1020232.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/preview/P1020232.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/image/P1020232.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/thumbnail/P1020234.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/preview/P1020234.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/image/P1020234.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/thumbnail/P1020235.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/preview/P1020235.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/image/P1020235.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/thumbnail/P1020236.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/preview/P1020236.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/image/P1020236.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/thumbnail/P1020233.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/preview/P1020233.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/image/P1020233.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/thumbnail/P1020243.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/preview/P1020243.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/image/P1020243.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/thumbnail/P1020245.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/preview/P1020245.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/image/P1020245.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/thumbnail/P1020246.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/preview/P1020246.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/image/P1020246.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/thumbnail/P1020249.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/preview/P1020249.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/image/P1020249.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/thumbnail/P1020253.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/preview/P1020253.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2017_Langlaufplausch/image/P1020253.JPG'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
