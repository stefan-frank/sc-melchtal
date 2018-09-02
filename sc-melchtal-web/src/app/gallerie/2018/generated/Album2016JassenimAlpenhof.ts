import {Album} from '../Album';

export class Album2016JassenimAlpenhof extends Album {
  title = 'Jassen im Alpenhof';
  date = new Date('2016-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/thumbnail/Foto 25.12.16, 18 00 44.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/preview/Foto 25.12.16, 18 00 44.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/image/Foto 25.12.16, 18 00 44.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/thumbnail/Foto 25.12.16, 18 00 47.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/preview/Foto 25.12.16, 18 00 47.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/image/Foto 25.12.16, 18 00 47.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/thumbnail/Foto 25.12.16, 18 00 50.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/preview/Foto 25.12.16, 18 00 50.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/image/Foto 25.12.16, 18 00 50.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/thumbnail/Foto 25.12.16, 18 00 52.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/preview/Foto 25.12.16, 18 00 52.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/image/Foto 25.12.16, 18 00 52.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/thumbnail/Foto 25.12.16, 18 00 55.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/preview/Foto 25.12.16, 18 00 55.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/image/Foto 25.12.16, 18 00 55.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/thumbnail/Foto 25.12.16, 18 00 58.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/preview/Foto 25.12.16, 18 00 58.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/image/Foto 25.12.16, 18 00 58.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/thumbnail/Foto 25.12.16, 18 01 04.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/preview/Foto 25.12.16, 18 01 04.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/image/Foto 25.12.16, 18 01 04.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/thumbnail/Foto 25.12.16, 18 01 07.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/preview/Foto 25.12.16, 18 01 07.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/image/Foto 25.12.16, 18 01 07.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/thumbnail/Foto 25.12.16, 18 01 09.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/preview/Foto 25.12.16, 18 01 09.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2016_Jassen_im_Alpenhof/image/Foto 25.12.16, 18 01 09.jpg'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
