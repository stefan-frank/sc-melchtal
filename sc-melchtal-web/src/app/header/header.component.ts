import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Page} from '../constants';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../store/reducers';
import {animate, AnimationEvent, state, style, transition, trigger} from '@angular/animations';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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
export class HeaderComponent implements OnInit {

  navbarCollapsed = true;
  isAuth = false;
  authSubscription: Subscription;
  private onPage: Page;
  public isShown = false;
  public imageHeaderUrlSmall = 'assets/scm-panorama-sm.jpg';
  public imageHeaderUrlBig = 'assets/scm-panorama-1200.jpg';
  private pictureForPage = Page.Home;

  constructor(private store: Store<fromStore.State>,
              private authService: AuthService) {
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

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onImageLoaded( event ) {
    this.isShown = true;
    console.log('HeaderComponent.onImageLoaded(): called');
  }

  onAnimationEvent( event: AnimationEvent ) {
    /*
    if ( event.phaseName === 'done' && event.triggerName === 'showImage') {
      this.isShown = true;
      console.log('AppComponent: animation done!');
    }
    */
  }

  onLogout() {
    this.authService.logout();
  }
}
