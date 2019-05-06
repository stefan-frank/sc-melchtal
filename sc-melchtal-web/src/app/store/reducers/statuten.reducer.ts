import * as StatutenActions from '../actions/statuten.actions';
import {StatutenActionTypes} from '../actions/statuten.actions';
import { Document } from '@contentful/rich-text-types';

export interface State {
  inhalt: Document;
  dataLoadedFromApi: boolean;
}

export const initialState: State = {
  inhalt: null,
  dataLoadedFromApi: false
};

export const getInhalt = (state: State) => state.inhalt;
export const getDataLoadedFromApi = (state: State) => state.dataLoadedFromApi;

export function reducer(state = initialState, action: StatutenActions.StatutenActions): State {
  switch (action.type) {
    case StatutenActionTypes.LoadStatuten:
      return handleLoadStatuten(state, action);
    case StatutenActionTypes.LoadStatutenFromApi:
      return handleLoadStatutenFromApi(state, action);
    case StatutenActionTypes.LoadStatutenCompleted:
      return handleLoadStatutenCompleted(state, action);
    case StatutenActionTypes.LoadStatutenSkipped:
      return handleLoadStatutenSkipped(state, action);
    default:
      return state;
  }
}

function handleLoadStatuten(state: State, action: StatutenActions.LoadStatuten) {
  return {
    ...state
  };
}

function handleLoadStatutenFromApi(state: State, action: StatutenActions.LoadStatutenFromApi) {
  return {
    ...state
  };
}

function handleLoadStatutenCompleted(state: State, action: StatutenActions.LoadStatutenCompleted) {
  return {
    ...state,
    inhalt: action.payload,
    dataLoadedFromApi: true
  };
}

function handleLoadStatutenSkipped(state: State, action: StatutenActions.LoadStatutenSkipped) {
  return {
    ...state
  };
}
