import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cloudinary} from '@cloudinary/angular-5.x';
import {Observable} from 'rxjs';
import {Photo} from './models/photo.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient, private cloudinary: Cloudinary) {
  }

  getPhotos(tag: string): Observable<Photo[]> {
    const url = this.cloudinary.url(tag, {
      format: 'json',
      type: 'list'
    });

    console.log('PhotoService calling: ' + url.toString());
    return this.http.get(url).pipe(map((data: any) => data.resources));

  }

  getTags(): Observable<string[]> {
    const url = 'https://res.cloudinary.com/sc-melchtal/tags/';

    console.log('PhotoService calling: ' + url.toString());
    return this.http.get(url).pipe(map((data: any) => data.resources));

  }
}
