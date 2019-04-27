import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {News} from '../models/news.model';
import {Store} from '@ngrx/store';
import * as fromStore from '../store/reducers';
import {Router} from '@angular/router';
import * as NewsActions from '../store/actions/news.action';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news$: Observable<News[]>;

  constructor(
    private store: Store<fromStore.State>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new NewsActions.LoadNews());
    this.news$ = this.store.select(fromStore.getNews);
  }

  routeTo(target: string, fragment?: string) {
    this.router.navigate([target], {fragment: fragment});
  }


}
