import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {News} from '../models/news.model';
import {Ereignis} from '../models/ereignis.model';
import {Store} from '@ngrx/store';
import * as fromStore from '../store/reducers/index';
import * as ProgrammActions from '../store/actions/programm.actions';
import * as NewsActions from '../store/actions/news.action';
import {from, Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  ereignisse: Ereignis[];
  news$: Observable<News[]>;
  private isCollapsed = true;
  SHOW_BUTTON_ANZEIGEN = 'Ältere News';
  SHOW_BUTTON_AUSBLENDEN = 'Ältere News';

  constructor(
    private store: Store<fromStore.State>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(new NewsActions.LoadNews());
    this.news$ = this.store.select(fromStore.getNews);
    this.store.dispatch(new ProgrammActions.LoadProgramm());
    this.store.select(fromStore.getProgramm).subscribe(programm => this.ereignisse = programm.ereignisseInZukunft);

    this.galleryOptions = [
      {
        imageAnimation: NgxGalleryAnimation.Slide,
        imageInfinityMove: true,
        imageAutoPlay: true,
        imageAutoPlayInterval: 5000,
        thumbnailsColumns: 5

      }
    ];

    this.galleryImages = [
      {
        small: 'assets-static-img/stirnband/stirnband-beispiele.jpeg',
        medium: 'assets-static-img/stirnband/stirnband-beispiele.jpeg',
        big: 'assets-static-img/stirnband/stirnband-beispiele.jpeg'
      },
      {
        small: 'assets-static-img/stirnband/farb-beispiel-anthrazit.jpeg',
        medium: 'assets-static-img/stirnband/farb-beispiel-anthrazit.jpeg',
        big: 'assets-static-img/stirnband/farb-beispiel-anthrazit.jpeg'
      },
      {
        small: 'assets-static-img/stirnband/farb-beispiel-hellviolett.jpeg',
        medium: 'assets-static-img/stirnband/farb-beispiel-hellviolett.jpeg',
        big: 'assets-static-img/stirnband/farb-beispiel-hellviolett.jpeg'
      },
      {
        small: 'assets-static-img/stirnband/farb-beispiel-pink.jpeg',
        medium: 'assets-static-img/stirnband/farb-beispiel-pink.jpeg',
        big: 'assets-static-img/stirnband/farb-beispiel-pink.jpeg'
      },
      {
        small: 'assets-static-img/stirnband/farb-beispiel-türkisblau.jpeg',
        medium: 'assets-static-img/stirnband/farb-beispiel-türkisblau.jpeg',
        big: 'assets-static-img/stirnband/farb-beispiel-türkisblau.jpeg'
      },
    ];
  }

  routeTo(target: string, fragment?: string) {
    this.router.navigate([target], {fragment: fragment});
  }

  toggleShowPastNews() {
    this.isCollapsed = !this.isCollapsed;
    document.getElementById('top').scrollIntoView({ behavior: 'smooth'});
  }

  public showButtonText(): string {
    return this.isCollapsed ? this.SHOW_BUTTON_ANZEIGEN : this.SHOW_BUTTON_AUSBLENDEN;
  }
}
