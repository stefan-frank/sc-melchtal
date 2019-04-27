import * as PageActions from '../actions/page.actions';
import {PageActionTypes} from '../actions/page.actions';
import {Page} from '../../constants';

export interface State {
  currentPage: Page;
}

export const initialState: State = {
  currentPage: Page.Home
};

export const getPage = (state: State) => state.currentPage;

export function reducer(state = initialState, action: PageActions.PageActions): State {
  switch (action.type) {
    case PageActionTypes.LoadPage:
      return handleLoadPage(state, action);
    case PageActionTypes.LoadPageCompleted:
      return handleLoadPageCompleted(state, action);
    default:
      return state;
  }
}

function handleLoadPage(state: State, action: PageActions.LoadPage): State {
  return  {
    ...state,
    currentPage: action.payload
  };
}

function handleLoadPageCompleted(state: State, action: PageActions.LoadPageCompleted): State {
  return {
    ...state
  };
}
