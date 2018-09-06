import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {Gallery} from './gallerie/2018/Gallery';
import {AlbumModel} from './album/model/AlbumModel';

const BASE_URL = environment.galleryBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getGalleryYears(): Observable<Number[]> {
    return this.http.get<number[]>(BASE_URL + 'assets/img/gallery/galleryYears.json');
  }

  public getGallery(year: Number): Observable<Gallery> {
    return this.http.get<Gallery>(BASE_URL + 'assets/img/gallery/gallery-' + year + '.json');
  }

  public getAlbum(albumId: String): Observable<AlbumModel[]> {
    console.log('GalleryService called with ' + albumId);
    return this.http.get<AlbumModel[]>(BASE_URL + 'assets/img/gallery/' + albumId.toString() + '/data.json');
  }
}
