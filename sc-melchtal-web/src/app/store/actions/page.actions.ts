import {Action} from '@ngrx/store';
import {Page} from '../../constants';

export enum PageActionTypes {
  LoadPage = '[Page] Load',
  LoadPageCompleted = '[Page] Load Completed',
}

export class LoadPage implements Action {
  readonly type = PageActionTypes.LoadPage;
  constructor(public payload: Page) {}
}

export class LoadPageCompleted implements Action {
  readonly type = PageActionTypes.LoadPageCompleted;
  constructor() {}
}


export type PageActions = LoadPage | LoadPageCompleted;
