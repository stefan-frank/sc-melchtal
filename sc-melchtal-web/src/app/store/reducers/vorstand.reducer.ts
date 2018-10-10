import {Vorstand} from '../../models/vorstand.model';
import * as VorstandActions from '../actions/vorstand.actions';
import {VorstandActionTypes} from '../actions/vorstand.actions';

export interface State {
  vorstand: Vorstand;
  dataLoadedFromApi: boolean;
}

export const initialState: State = {
  vorstand: new Vorstand(),
  dataLoadedFromApi: false
}

export const getVorstand = (state: State) => state.vorstand;
export const getDataLoadedFromApi = (state: State) => state.dataLoadedFromApi;
export const getVorstandsmitglieder = (state: State) => state.vorstand.vorstandsMitglieder;

export function reducer(state = initialState, action: VorstandActions.VorstandActions): State {
  switch (action.type) {
    case VorstandActionTypes.LoadVorstand:
      return handleLoadVorstand(state, action);
    case VorstandActionTypes.LoadVorstandFromApi:
      return handleLoadVorstandFromApi(state, action);
    case VorstandActionTypes.LoadVorstandCompleted:
      return handleLoadVorstandCompleted(state, action);
    case VorstandActionTypes.LoadVorstandSkipped:
      return handleLoadVorstandSkipped(state, action);
    default:
      return state;
  }
}

function handleLoadVorstand(state: State, action: VorstandActions.LoadVorstand) {
  return {
    ...state
  };
}

function handleLoadVorstandFromApi(state: State, action: VorstandActions.LoadVorstandFromApi) {
  return {
    ...state
  };
}

function handleLoadVorstandCompleted(state: State, action: VorstandActions.LoadVorstandCompleted) {
  return {
    ...state,
    vorstand: action.payload,
    dataLoadedFromApi: true
  };
}

function handleLoadVorstandSkipped(state: State, action: VorstandActions.LoadVorstandSkipped) {
  return {
    ...state
  };
}
