import {Component, OnDestroy, OnInit} from '@angular/core';
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
import {AuthService} from './auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit, OnDestroy {
  authSubscription: Subscription;

  constructor(
    private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private store: Store<fromStore.State>,
    private authService: AuthService
  ) {
    this.authService.initAuthListener();
  }

  ngOnInit(): void {
    if (environment.production) {
      this.angulartics2GoogleAnalytics.startTracking();
    }
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }


}
