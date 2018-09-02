import {Album} from '../Album';

export class Album2014WanderungMuotatal16u17Aug14 extends Album {
  title = 'Wanderung Muotatal 16 u 17 Aug 14';
  date = new Date('2014-01-01T00:00');
  gallery = [
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/thumbnail/P1000376.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/preview/P1000376.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/image/P1000376.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/thumbnail/P1000378.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/preview/P1000378.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/image/P1000378.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/thumbnail/P1000380.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/preview/P1000380.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/image/P1000380.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/thumbnail/P1000381.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/preview/P1000381.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/image/P1000381.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/thumbnail/P1000382.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/preview/P1000382.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/image/P1000382.JPG'
    }
    ,
    {
      small: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/thumbnail/P1000384.JPG',
      medium: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/preview/P1000384.JPG',
      big: Album.BASE_URL + 'assets/img/gallery/2014_Wanderung_Muotatal_16_u_17_Aug_14/image/P1000384.JPG'
    }
  ];

  public toString() {
    return 'Album \"' + this.title + '\" (' + this.date.getFullYear() + ')';
  }
}
