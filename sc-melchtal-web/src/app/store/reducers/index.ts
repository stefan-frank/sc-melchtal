import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromProgramm from './programm.reducer';
import * as fromVorstand from './vorstand.reducer';
import * as fromNews from './news.reducer';

export interface State {
  programm: fromProgramm.State;
  vorstand: fromVorstand.State;
  news: fromNews.State;
}

export const reducers: ActionReducerMap<State> = {
  programm: fromProgramm.reducer,
  vorstand: fromVorstand.reducer,
  news: fromNews.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectVorstandState = createFeatureSelector<fromVorstand.State>('vorstand');
export const getVorstand = createSelector(selectVorstandState, fromVorstand.getVorstand);
export const getVorstandsmitglieder = createSelector(selectVorstandState, fromVorstand.getVorstandsmitglieder);
export const getVorstandDataLoadedFromApi = createSelector(selectVorstandState, fromVorstand.getDataLoadedFromApi);

export const selectProgrammState = createFeatureSelector<fromProgramm.State>('programm');
export const getProgramm = createSelector(selectProgrammState, fromProgramm.getProgramm);
export const getProgrammStatus = createSelector(selectProgrammState, fromProgramm.getProgrammStatus);
export const getProgrammDataLoadedFromApi = createSelector(selectProgrammState, fromProgramm.getDataLoadedFromApi);

export const selectNewsState = createFeatureSelector<fromNews.State>('news');
export const getNews = createSelector(selectNewsState, fromNews.getNews);
export const getNewsDataLoadedFromApi = createSelector(selectNewsState, fromNews.getDataLoadedFromApi);
