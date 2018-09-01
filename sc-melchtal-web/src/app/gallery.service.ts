import {NgxGalleryImage} from 'ngx-gallery';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getGallery2(): Observable<NgxGalleryImage[]> {
    return this.http.get<NgxGalleryImage[]>('assets/img/getGalleryByYear/2018_Stirnband/data-nx.json');
  }

  public getGallery(galleryName: string): NgxGalleryImage[] {
    return [
      {
        small: '../assets/stirnband/stirnband-beispiele.jpeg',
        medium: '../assets/stirnband/stirnband-beispiele.jpeg',
        big: '../assets/stirnband/stirnband-beispiele.jpeg'
      },
      {
        small: '../assets/stirnband/farb-beispiel-anthrazit.jpeg',
        medium: '../assets/stirnband/farb-beispiel-anthrazit.jpeg',
        big: '../assets/stirnband/farb-beispiel-anthrazit.jpeg'
      },
      {
        small: '../assets/stirnband/farb-beispiel-hellviolett.jpeg',
        medium: '../assets/stirnband/farb-beispiel-hellviolett.jpeg',
        big: '../assets/stirnband/farb-beispiel-hellviolett.jpeg'
      },
      {
        small: '../assets/stirnband/farb-beispiel-pink.jpeg',
        medium: '../assets/stirnband/farb-beispiel-pink.jpeg',
        big: '../assets/stirnband/farb-beispiel-pink.jpeg'
      },
      {
        small: '../assets/stirnband/farb-beispiel-türkisblau.jpeg',
        medium: '../assets/stirnband/farb-beispiel-türkisblau.jpeg',
        big: '../assets/stirnband/farb-beispiel-türkisblau.jpeg'
      }
    ];
  }
}
