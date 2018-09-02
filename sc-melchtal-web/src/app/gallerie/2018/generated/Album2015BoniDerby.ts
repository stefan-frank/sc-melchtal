import {Album} from '../Album';

export class Album2015BoniDerby extends Album {
  title = 'Boni Derby';
  date = new Date('2015-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/thumbnail/P1000084.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/preview/P1000084.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/image/P1000084.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/thumbnail/P1000086.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/preview/P1000086.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/image/P1000086.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/thumbnail/P1000087.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/preview/P1000087.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/image/P1000087.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/thumbnail/P1000088.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/preview/P1000088.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/image/P1000088.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/thumbnail/P1000089.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/preview/P1000089.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/image/P1000089.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/thumbnail/P1000092.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/preview/P1000092.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/image/P1000092.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/thumbnail/P1000093.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/preview/P1000093.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/image/P1000093.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/thumbnail/P1000102.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/preview/P1000102.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/image/P1000102.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/thumbnail/P1000103.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/preview/P1000103.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/image/P1000103.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/thumbnail/P1000106.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/preview/P1000106.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2015_Boni_Derby/image/P1000106.JPG'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
