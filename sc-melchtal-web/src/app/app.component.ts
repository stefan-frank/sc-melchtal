import { Component } from '@angular/core';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarCollapsed = true;
  imageHeaderUrlBig = 'scm-panorama-1200.jpg';
  imageHeaderUrlSmall = 'scm-panorama-sm.jpg';

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    if (environment.production) {
      angulartics2GoogleAnalytics.startTracking();
    }
  }
}
