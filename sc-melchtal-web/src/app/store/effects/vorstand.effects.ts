import {Injectable} from '@angular/core';
import {ContentfulService} from '../../contentful.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as fromStore from '../reducers/index';
import {Action, Store} from '@ngrx/store';
import * as VorstandActions from '../actions/vorstand.actions';
import {Observable} from 'rxjs';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';

@Injectable()
export class VorstandEffects {

  constructor(private actions$: Actions,
              private store: Store<fromStore.State>,
              private contentfulService: ContentfulService) {}

  @Effect()
  loadVorstand$: Observable<Action> = this.actions$.pipe(
    ofType(VorstandActions.VorstandActionTypes.LoadVorstand),
    withLatestFrom(this.store.select(fromStore.getVorstandDataLoadedFromApi)),
    map(([action, loaded]) => {
      if (!loaded) {
        return new VorstandActions.LoadVorstandFromApi();
      } else {
        return new VorstandActions.LoadVorstandSkipped();
      }
    })
  );

  @Effect()
  loadVorstandFromApi$: Observable<Action> = this.actions$.pipe(
    ofType(VorstandActions.VorstandActionTypes.LoadVorstandFromApi),
    switchMap(() => {
      return this.contentfulService.getVorstand().then(vorstand => {
        return new VorstandActions.LoadVorstandCompleted(vorstand);
      });
    })
  );

}
