import {Album} from '../Album';

export class Album2010Bowling extends Album {
  title = 'Bowling';
  date = new Date('2010-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/thumbnail/SC Melchtal-Bowling 20.11.10 020.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/preview/SC Melchtal-Bowling 20.11.10 020.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/image/SC Melchtal-Bowling 20.11.10 020.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/thumbnail/SC Melchtal-Bowling 20.11.10 008.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/preview/SC Melchtal-Bowling 20.11.10 008.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/image/SC Melchtal-Bowling 20.11.10 008.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/thumbnail/SC Melchtal-Bowling 20.11.10 011.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/preview/SC Melchtal-Bowling 20.11.10 011.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/image/SC Melchtal-Bowling 20.11.10 011.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/thumbnail/SC Melchtal-Bowling 20.11.10 012.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/preview/SC Melchtal-Bowling 20.11.10 012.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/image/SC Melchtal-Bowling 20.11.10 012.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/thumbnail/SC Melchtal-Bowling 20.11.10 017.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/preview/SC Melchtal-Bowling 20.11.10 017.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/image/SC Melchtal-Bowling 20.11.10 017.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/thumbnail/SC Melchtal-Bowling 20.11.10 019.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/preview/SC Melchtal-Bowling 20.11.10 019.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/image/SC Melchtal-Bowling 20.11.10 019.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/thumbnail/SC Melchtal-Bowling 20.11.10 009.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/preview/SC Melchtal-Bowling 20.11.10 009.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/image/SC Melchtal-Bowling 20.11.10 009.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/thumbnail/SC Melchtal-Bowling 20.11.10 024.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/preview/SC Melchtal-Bowling 20.11.10 024.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/image/SC Melchtal-Bowling 20.11.10 024.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/thumbnail/SC Melchtal-Bowling 20.11.10 031.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/preview/SC Melchtal-Bowling 20.11.10 031.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/image/SC Melchtal-Bowling 20.11.10 031.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/thumbnail/SC Melchtal-Bowling 20.11.10 032.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/preview/SC Melchtal-Bowling 20.11.10 032.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/image/SC Melchtal-Bowling 20.11.10 032.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/thumbnail/SC Melchtal-Bowling 20.11.10 033.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/preview/SC Melchtal-Bowling 20.11.10 033.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/image/SC Melchtal-Bowling 20.11.10 033.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/thumbnail/SC Melchtal-Bowling 20.11.10 035.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/preview/SC Melchtal-Bowling 20.11.10 035.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2010_Bowling/image/SC Melchtal-Bowling 20.11.10 035.JPG'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
