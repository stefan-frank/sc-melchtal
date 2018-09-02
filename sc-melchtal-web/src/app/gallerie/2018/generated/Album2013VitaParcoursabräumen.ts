import {Album} from '../Album';

export class Album2013VitaParcoursabräumen extends Album {
  title = 'Vita Parcours abräumen';
  date = new Date('2013-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/thumbnail/P1150451.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/preview/P1150451.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/image/P1150451.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/thumbnail/P1150460.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/preview/P1150460.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/image/P1150460.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/thumbnail/P1150464.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/preview/P1150464.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/image/P1150464.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/thumbnail/P1150468.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/preview/P1150468.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/image/P1150468.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/thumbnail/P1150475.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/preview/P1150475.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/image/P1150475.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/thumbnail/P1150482.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/preview/P1150482.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Vita_Parcours_abräumen/image/P1150482.jpg'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
