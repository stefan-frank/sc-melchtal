import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ContentfulService} from '../../contentful.service';
import {from, Observable} from 'rxjs';
import {Action, Store} from '@ngrx/store';
import * as ProgrammActions from '../actions/programm.actions';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import * as fromStore from '../reducers/index';

@Injectable()
export class ProgrammEffects {

  constructor(private actions$: Actions,
              private store: Store<fromStore.State>,
              private contentfulService: ContentfulService) {}

  @Effect()
  loadProgramm$: Observable<Action> = this.actions$.pipe(
    ofType(ProgrammActions.ProgrammActionTypes.LoadProgramm),
    withLatestFrom(this.store.select(fromStore.getProgrammDataLoadedFromApi)),
    map(([action, loaded]) => {
        if (!loaded) {
          return new ProgrammActions.LoadProgrammFromApi();
        } else {
          return new ProgrammActions.LoadProgrammSkipped();
        }
      }
    )
  );

  @Effect()
  loadProgrammFromApi$: Observable<Action> = this.actions$.pipe(
    ofType(ProgrammActions.ProgrammActionTypes.LoadProgrammFromApi),
    switchMap(action => {
      return this.contentfulService.getEvents().then(programm => {
        return new ProgrammActions.LoadProgrammCompleted(programm);
      });
    })
  );

}
