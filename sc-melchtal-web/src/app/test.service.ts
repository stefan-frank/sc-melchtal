import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable, Subject, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {TestAlbum} from './test/testAlbum.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private availableAlbums: TestAlbum[];
  albumsChanged = new Subject<TestAlbum[]>();
  private fireBaseSubscriptions: Subscription[] = [];

  constructor(private db: AngularFirestore) { }

  public fetchAvailableAlbums(): void {
    this.fireBaseSubscriptions.push(this.db.collection('availableAlbums').snapshotChanges().pipe(
      map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            name: doc.payload.doc.data()['name'],
            year: doc.payload.doc.data()['year']
          };
        });
      })
    ).subscribe((albums: TestAlbum[]) => {
      console.log(albums);
      this.availableAlbums = albums;
      this.albumsChanged.next([...this.availableAlbums]);
    }));
  }

  cancelSubscriptions() {
    this.fireBaseSubscriptions.forEach(sub => sub.unsubscribe());
  }
}
