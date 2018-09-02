import {Album} from '../Album';

export class Album2016Langlaufplausch extends Album {
  title = 'Langlaufplausch';
  date = new Date('2016-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/thumbnail/IMG-20160103-WA0001.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/preview/IMG-20160103-WA0001.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/image/IMG-20160103-WA0001.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/thumbnail/IMG-20160103-WA0005.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/preview/IMG-20160103-WA0005.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/image/IMG-20160103-WA0005.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/thumbnail/IMG-20160103-WA0009.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/preview/IMG-20160103-WA0009.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/image/IMG-20160103-WA0009.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/thumbnail/IMG-20160104-WA0000.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/preview/IMG-20160104-WA0000.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/image/IMG-20160104-WA0000.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/thumbnail/P1010556.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/preview/P1010556.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/image/P1010556.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/thumbnail/P1010559.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/preview/P1010559.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/image/P1010559.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/thumbnail/P1010561.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/preview/P1010561.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/image/P1010561.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/thumbnail/P1020625.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/preview/P1020625.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/image/P1020625.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/thumbnail/P1020626.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/preview/P1020626.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Langlaufplausch/image/P1020626.JPG'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
