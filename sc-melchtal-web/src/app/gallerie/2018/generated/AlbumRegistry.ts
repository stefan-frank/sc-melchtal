import {AlbumFactory} from '../AlbumFactory';
import {Album2018PicknickimFlüemätteli} from './Album2018PicknickimFlüemätteli';
import {Album2017OTourHelfereinsatz} from './Album2017OTourHelfereinsatz';
import {Album2018Canyoning} from './Album2018Canyoning';

export class AlbumRegistry {

  static loadAlbums() {
    AlbumFactory.registerAlbum(new Album2018PicknickimFlüemätteli());
    AlbumFactory.registerAlbum(new Album2017OTourHelfereinsatz());
    AlbumFactory.registerAlbum(new Album2018Canyoning());
  }
}
