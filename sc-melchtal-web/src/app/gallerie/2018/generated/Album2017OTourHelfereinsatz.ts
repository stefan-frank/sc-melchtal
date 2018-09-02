import {Album} from '../Album';

export class Album2017OTourHelfereinsatz extends Album {
  title = 'OTour Helfereinsatz';
  date = new Date('2017-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/thumbnail/Foto 10.09.17, 07 32 24.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/preview/Foto 10.09.17, 07 32 24.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/image/Foto 10.09.17, 07 32 24.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/thumbnail/Foto 10.09.17, 07 32 55.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/preview/Foto 10.09.17, 07 32 55.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/image/Foto 10.09.17, 07 32 55.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/thumbnail/Foto 10.09.17, 07 33 48.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/preview/Foto 10.09.17, 07 33 48.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/image/Foto 10.09.17, 07 33 48.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/thumbnail/Foto 10.09.17, 08 55 02.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/preview/Foto 10.09.17, 08 55 02.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/image/Foto 10.09.17, 08 55 02.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/thumbnail/Foto 10.09.17, 08 56 25.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/preview/Foto 10.09.17, 08 56 25.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/image/Foto 10.09.17, 08 56 25.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/thumbnail/Foto 10.09.17, 08 56 28.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/preview/Foto 10.09.17, 08 56 28.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2017_O-Tour_Helfereinsatz/image/Foto 10.09.17, 08 56 28.jpg'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
