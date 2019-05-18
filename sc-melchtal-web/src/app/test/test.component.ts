import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {TestAlbum} from './testAlbum.model';
import {TestService} from '../test.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {

  albums: TestAlbum[];
  private albumSubscription: Subscription;

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.albumSubscription = this.testService.albumsChanged.subscribe(
      albums => (this.albums = albums)
    );
    this.testService.fetchAvailableAlbums();
  }

  ngOnDestroy(): void {
    this.albumSubscription.unsubscribe();
  }

}
