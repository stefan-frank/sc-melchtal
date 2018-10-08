import {Programm} from '../../models/programm.model';
import * as ProgrammActions from '../actions/programm.actions';
import {ProgrammActionTypes} from '../actions/programm.actions';

export interface State {
  programm: Programm;
  status: string;
  dataLoadedFromApi: boolean;
}

export const initialState: State  = {
  programm: new Programm(),
  status: 'uninitialized',
  dataLoadedFromApi: false
}

export const getProgramm = (state: State) => state.programm;
export const getProgrammStatus = (state: State) => state.status;
export const getDataLoadedFromApi = (state: State) => state.dataLoadedFromApi;

export function reducer(state = initialState, action: ProgrammActions.ProgrammActions): State {
  switch (action.type) {
    case ProgrammActions.ProgrammActionTypes.LoadProgramm:
      return handleLoadProgramm(state, action);
    case ProgrammActions.ProgrammActionTypes.LoadProgrammFromApi:
      return handleLoadProgrammFromApi(state, action);
    case ProgrammActionTypes.LoadProgrammCompleted:
      return handleLoadProgrammCompleted(state, action);
    default:
      return state;
  }
}

function handleLoadProgramm(state: State, action: ProgrammActions.LoadProgramm): State {
  return  {
    ...state,
    status: 'loading'
  };
}

function handleLoadProgrammFromApi(state: State, action: ProgrammActions.LoadProgrammFromApi): State {
  return {
    ...state,
    status: 'loading from Api'
  };
}

function handleLoadProgrammCompleted(state: State, action: ProgrammActions.LoadProgrammCompleted): State {
  return {
    ...state,
    programm: action.payload,
    status: 'loaded',
    dataLoadedFromApi: true
  };
}
