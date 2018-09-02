import {Album} from './Album';
import {AlbumRegistry} from './generated/AlbumRegistry';

export class AlbumFactory {
  private map: Map<number, Array<Album>> = new Map<number, Array<Album>>();

  constructor() {
    AlbumRegistry.loadAlbums().forEach(value => this.registerAlbum(value));
  }

  public registerAlbum(album: Album) {
    const year = album.date.getFullYear();

    if (!this.map.has(year)) {
      this.map.set(year, []);
    }

    const array = this.map.get(year);
    array.push(album);
  }

  public getAllAlbums(): Array<Album> {
    const allAlbums: Array<Album> = [];
    this.map.forEach((value, key) => value.forEach(value1 => allAlbums.push(value1)
    ));
    return allAlbums;
  }
}
