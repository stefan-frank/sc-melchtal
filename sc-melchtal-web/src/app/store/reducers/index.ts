import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromProgramm from './programm.reducer';

export interface State {
  programm: fromProgramm.State;

}

export const reducers: ActionReducerMap<State> = {
  programm: fromProgramm.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectProgrammState = createFeatureSelector<fromProgramm.State>('programm');
export const getProgramm = createSelector(selectProgrammState, fromProgramm.getProgramm);
export const getProgrammStatus = createSelector(selectProgrammState, fromProgramm.getProgrammStatus);
export const getDataLoadedFromApi = createSelector(selectProgrammState, fromProgramm.getDataLoadedFromApi);
