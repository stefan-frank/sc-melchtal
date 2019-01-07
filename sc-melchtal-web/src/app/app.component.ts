import { Component } from '@angular/core';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
import {environment} from '../environments/environment';
import {Store, select} from '@ngrx/store';
import * as fromStore from './store/reducers';
import {Page} from './constants';
import {
  animate, AnimationEvent,
  state,
  style,
  transition, trigger
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('showImage', [
      state('notShown', style({
        opacity: '0'
      })),
      state('shown', style({
        opacity: '1'
      })),
      transition('notShown => shown', [
        animate('0.15s')
      ]),
      transition('shown => notShown', [
        animate('0.05s')
      ])
    ])
  ]
})
export class AppComponent {
  navbarCollapsed = true;

  private onPage: Page;
  public isShown = false;
  public imageHeaderUrlSmall = 'assets/scm-panorama-sm.jpg';
  public imageHeaderUrlBig = 'assets/scm-panorama-1200.jpg';
  private pictureForPage = Page.Home;

  constructor(
    private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private store: Store<fromStore.State>
  ) {
    if (environment.production) {
      angulartics2GoogleAnalytics.startTracking();
    }
    this.store.pipe(
      select((state: fromStore.State) => state.page.currentPage)).subscribe((page) => {
        const oldPictureForPage = this.pictureForPage;
        this.onPage = page;

        switch (this.onPage) {
          case Page.Oberwend:
            this.imageHeaderUrlSmall = 'assets/scm-oberwend-sm.jpg';
            this.imageHeaderUrlBig = 'assets/scm-oberwend-1195.jpg';
            this.pictureForPage = Page.Oberwend;
            break;
          default:
            this.imageHeaderUrlSmall = 'assets/scm-panorama-sm.jpg';
            this.imageHeaderUrlBig = 'assets/scm-panorama-1200.jpg';
            this.pictureForPage = Page.Home;
            break;
        }

        if (oldPictureForPage !== this.pictureForPage) {
          this.isShown = false;
        }
      });
  }

  onAnimationEvent( event: AnimationEvent ) {
    /*
    if ( event.phaseName === 'done' && event.triggerName === 'showImage') {
      this.isShown = true;
      console.log('AppComponent: animation done!');
    }
    */
  }

  onImageLoaded( event ) {
    this.isShown = true;
    console.log('AppComponent.onImageLoaded(): called');
  }
}
