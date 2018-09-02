import {Album} from '../Album';

export class Album2012SaasFee extends Album {
  title = 'Saas Fee';
  date = new Date('2012-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/009.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/009.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/009.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/001.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/001.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/001.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/003.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/003.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/003.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/004.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/004.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/004.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/005.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/005.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/005.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/006.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/006.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/006.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/007.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/007.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/007.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/008.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/008.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/008.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/002.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/002.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/002.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/010.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/010.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/010.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/011.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/011.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/011.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/012.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/012.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/012.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/013.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/013.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/013.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/014.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/014.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/014.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/015.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/015.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/015.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/016.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/016.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/016.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/thumbnail/017.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/preview/017.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2012_Saas_Fee/image/017.JPG'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
