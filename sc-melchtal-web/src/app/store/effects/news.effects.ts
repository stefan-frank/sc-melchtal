import * as NewsActions from '../actions/news.action';
import * as fromStore from '../reducers/index';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ContentfulService} from '../../contentful.service';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';

@Injectable()
export class NewsEffects {

  constructor(private actions$: Actions,
              private store: Store<fromStore.State>,
              private contentfulService: ContentfulService) {}

  @Effect()
  loadNews$: Observable<Action> = this.actions$.pipe(
    ofType(NewsActions.NewsActionTypes.LoadNews),
    withLatestFrom(this.store.select(fromStore.getNewsDataLoadedFromApi)),
    map(([action, loaded]) => {
      if (!loaded) {
        return new NewsActions.LoadNewsFromApi();
      } else {
        return new NewsActions.LoadNewsSkipped();
      }
    }
    )
  );

  @Effect()
  loadNewsFromApi$: Observable<Action> = this.actions$.pipe(
    ofType(NewsActions.NewsActionTypes.LoadNewsFromApi),
    switchMap(() => {
      return this.contentfulService.getNews().then(news => {
        return new NewsActions.LoadNewsCompleted(news);
      });
    })
  );
}
