import {Album} from '../Album';

export class Album2014Paintball extends Album {
  title = 'Paintball';
  date = new Date('2014-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/thumbnail/PICT0014.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/preview/PICT0014.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/image/PICT0014.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/thumbnail/PICT0002.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/preview/PICT0002.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/image/PICT0002.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/thumbnail/PICT0008.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/preview/PICT0008.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/image/PICT0008.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/thumbnail/PICT0010.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/preview/PICT0010.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/image/PICT0010.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/thumbnail/PICT0011.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/preview/PICT0011.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/image/PICT0011.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/thumbnail/PICT0012.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/preview/PICT0012.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/image/PICT0012.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/thumbnail/PICT0005.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/preview/PICT0005.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/image/PICT0005.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/thumbnail/PICT0015.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/preview/PICT0015.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/image/PICT0015.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/thumbnail/PICT0016.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/preview/PICT0016.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/image/PICT0016.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/thumbnail/PICT0019.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/preview/PICT0019.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/image/PICT0019.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/thumbnail/PICT0020.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/preview/PICT0020.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/image/PICT0020.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/thumbnail/PICT0022.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/preview/PICT0022.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Paintball/image/PICT0022.JPG'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
