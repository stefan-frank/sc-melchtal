import {Component, OnInit} from '@angular/core';
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

  ereignisse: Ereignis[];
  news: News;

  constructor(
    private store: Store<fromStore.State>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(new NewsActions.LoadNews());
    this.store.select(fromStore.getNews).subscribe(latestNews => this.news = latestNews[0]);
    this.store.dispatch(new ProgrammActions.LoadProgramm());
    this.store.select(fromStore.getProgramm).subscribe(programm => this.ereignisse = programm.ereignisseInZukunft);
  }

  routeTo(target: string, fragment?: string) {
    this.router.navigate([target], {fragment: fragment});
  }

}
