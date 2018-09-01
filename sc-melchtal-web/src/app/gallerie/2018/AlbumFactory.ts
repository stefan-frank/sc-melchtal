import {Album} from './Album';
import {AlbumRegistry} from './generated/AlbumRegistry';

export class AlbumFactory {

  private static instance: AlbumFactory = new AlbumFactory();

  private map: Map<number, Array<Album>> = new Map<number, Array<Album>>();

  private constructor() {
  }

  static init() {
    AlbumRegistry.loadAlbums();
  }

  static registerAlbum(album: Album) {
    const year = album.date.getFullYear();

    if (!this.instance.map.has(year)) {
      this.instance.map.set(year, []);
    }

    const array = this.instance.map.get(year);
    array.push(album);
  }

  static getAllAlbums(): Array<Album> {
    const allAlbums: Array<Album> = [];
    this.instance.map.forEach((value, key) => value.forEach(value1 => allAlbums.push(value1)
    ));
    return allAlbums;
  }
}
