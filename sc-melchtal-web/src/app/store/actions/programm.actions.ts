import {Action} from '@ngrx/store';
import {Programm} from '../../models/programm.model';

export enum ProgrammActionTypes {
  LoadProgramm = '[PROGRAMM] Load Programm',
  LoadProgrammCompleted = '[PROGRAMM] Load Programm Completed',
  LoadProgrammFromApi = '[PROGRAMM] Load Programm From Api',
  LoadProgrammSkipped = '[PROGRAMM] Load Programm Skipped'
}

export class LoadProgramm implements Action {
  readonly type = ProgrammActionTypes.LoadProgramm;
  constructor() {}
}

export class LoadProgrammCompleted implements Action {
  readonly type = ProgrammActionTypes.LoadProgrammCompleted;
  constructor(public payload: Programm) {}
}

export class LoadProgrammSkipped implements Action {
  readonly type = ProgrammActionTypes.LoadProgrammSkipped;
}
export class LoadProgrammFromApi implements Action {
  readonly type = ProgrammActionTypes.LoadProgrammFromApi;
}

export type ProgrammActions = LoadProgramm | LoadProgrammCompleted| LoadProgrammFromApi | LoadProgrammSkipped;
