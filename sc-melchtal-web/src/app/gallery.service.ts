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
}
