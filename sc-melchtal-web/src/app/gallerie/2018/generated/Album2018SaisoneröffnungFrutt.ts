import {Album} from '../Album';

export class Album2018SaisoneröffnungFrutt extends Album {
  title = 'Saisoneröffnung Frutt';
  date = new Date('2018-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2018_Saisoneröffnung_Frutt/thumbnail/Foto 16.06.18, 11 43 08.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2018_Saisoneröffnung_Frutt/preview/Foto 16.06.18, 11 43 08.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2018_Saisoneröffnung_Frutt/image/Foto 16.06.18, 11 43 08.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2018_Saisoneröffnung_Frutt/thumbnail/Foto 16.06.18, 11 43 36.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2018_Saisoneröffnung_Frutt/preview/Foto 16.06.18, 11 43 36.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2018_Saisoneröffnung_Frutt/image/Foto 16.06.18, 11 43 36.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2018_Saisoneröffnung_Frutt/thumbnail/Foto 16.06.18, 12 17 10.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2018_Saisoneröffnung_Frutt/preview/Foto 16.06.18, 12 17 10.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2018_Saisoneröffnung_Frutt/image/Foto 16.06.18, 12 17 10.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2018_Saisoneröffnung_Frutt/thumbnail/Foto 16.06.18, 12 20 24.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2018_Saisoneröffnung_Frutt/preview/Foto 16.06.18, 12 20 24.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2018_Saisoneröffnung_Frutt/image/Foto 16.06.18, 12 20 24.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2018_Saisoneröffnung_Frutt/thumbnail/Foto 16.06.18, 12 23 06.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2018_Saisoneröffnung_Frutt/preview/Foto 16.06.18, 12 23 06.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2018_Saisoneröffnung_Frutt/image/Foto 16.06.18, 12 23 06.jpg'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
