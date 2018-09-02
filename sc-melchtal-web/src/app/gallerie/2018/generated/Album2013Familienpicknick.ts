import {Album} from '../Album';

export class Album2013Familienpicknick extends Album {
  title = 'Familienpicknick';
  date = new Date('2013-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/thumbnail/Foto_19.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/preview/Foto_19.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/image/Foto_19.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/thumbnail/Foto_11.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/preview/Foto_11.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/image/Foto_11.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/thumbnail/Foto_13.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/preview/Foto_13.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/image/Foto_13.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/thumbnail/Foto_14.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/preview/Foto_14.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/image/Foto_14.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/thumbnail/Foto_16.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/preview/Foto_16.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/image/Foto_16.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/thumbnail/Foto_18.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/preview/Foto_18.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/image/Foto_18.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/thumbnail/Foto_12.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/preview/Foto_12.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/image/Foto_12.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/thumbnail/Foto_2.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/preview/Foto_2.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/image/Foto_2.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/thumbnail/Foto_20.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/preview/Foto_20.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/image/Foto_20.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/thumbnail/Foto_22.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/preview/Foto_22.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/image/Foto_22.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/thumbnail/Foto_24.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/preview/Foto_24.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/image/Foto_24.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/thumbnail/Foto_3.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/preview/Foto_3.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/image/Foto_3.jpg'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/thumbnail/Foto_8.jpg',
      medium: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/preview/Foto_8.jpg',
      big: Album.BASE_URL + 'assets/img/gallery/2013_Familienpicknick/image/Foto_8.jpg'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
