import {Injectable} from '@angular/core';
import {ContentfulService} from '../../contentful.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as fromStore from '../reducers/index';
import {Action, Store} from '@ngrx/store';
import * as StatutenActions from '../actions/statuten.actions';
import {Observable} from 'rxjs';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';

@Injectable()
export class StatutenEffects {

  constructor(private actions$: Actions,
              private store: Store<fromStore.State>,
              private contentfulService: ContentfulService) {}

  @Effect()
  loadStatuten$: Observable<Action> = this.actions$.pipe(
    ofType(StatutenActions.StatutenActionTypes.LoadStatuten),
    withLatestFrom(this.store.select(fromStore.getStatutenDataLoadedFromApi)),
    map(([action, loaded]) => {
      if (!loaded) {
        return new StatutenActions.LoadStatutenFromApi();
      } else {
        return new StatutenActions.LoadStatutenSkipped();
      }
    })
  );

  @Effect()
  loadStatutenFromApi$: Observable<Action> = this.actions$.pipe(
    ofType(StatutenActions.StatutenActionTypes.LoadStatutenFromApi),
    switchMap(() => {
      return this.contentfulService.getStatuten().then(inhalt => {
        return new StatutenActions.LoadStatutenCompleted(inhalt);
      });
    })
  );

}
