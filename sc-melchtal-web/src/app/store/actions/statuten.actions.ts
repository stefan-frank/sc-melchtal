import {Action} from '@ngrx/store';
import { Document } from '@contentful/rich-text-types';

export enum StatutenActionTypes {
  LoadStatuten = '[STATUTEN] Load Statuten',
  LoadStatutenCompleted = '[STATUTEN] Load Statuten Completed',
  LoadStatutenFromApi = '[STATUTEN] Load Statuten From Api',
  LoadStatutenSkipped = '[STATUTEN] Load Statuten Skipped'
}

export class LoadStatuten implements Action {
  readonly type = StatutenActionTypes.LoadStatuten;
}

export class LoadStatutenCompleted implements Action {
  readonly type = StatutenActionTypes.LoadStatutenCompleted;
  constructor(public payload: Document) {}
}

export class LoadStatutenFromApi implements Action {
  readonly type = StatutenActionTypes.LoadStatutenFromApi;
}

export class LoadStatutenSkipped implements Action {
  readonly type = StatutenActionTypes.LoadStatutenSkipped;
}

export type StatutenActions = LoadStatuten | LoadStatutenCompleted | LoadStatutenFromApi | LoadStatutenSkipped;
