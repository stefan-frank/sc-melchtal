import {Action} from '@ngrx/store';
import {News} from '../../models/news.model';

export enum NewsActionTypes {
  LoadNews = '[NEWS] Load News',
  LoadNewsCompleted = '[NEWS] Load News Completed',
  LoadNewsFromApi = '[NEWS] Load News From Api',
  LoadNewsSkipped = '[NEWS] Load News Skipped'
}

export class LoadNews implements Action {
  readonly type = NewsActionTypes.LoadNews;
  constructor() {}
}

export class LoadNewsCompleted implements Action {
  readonly type = NewsActionTypes.LoadNewsCompleted;
  constructor(public payload: News[]) {}
}

export class LoadNewsSkipped implements Action {
  readonly type = NewsActionTypes.LoadNewsSkipped;
}
export class LoadNewsFromApi implements Action {
  readonly type = NewsActionTypes.LoadNewsFromApi;
}

export type NewsActions = LoadNews | LoadNewsCompleted| LoadNewsFromApi | LoadNewsSkipped;
