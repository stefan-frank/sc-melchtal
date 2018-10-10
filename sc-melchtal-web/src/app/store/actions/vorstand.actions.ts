import {Action} from '@ngrx/store';
import {Vorstand} from '../../models/vorstand.model';

export enum VorstandActionTypes {
  LoadVorstand = '[VORSTAND] Load Vorstand',
  LoadVorstandCompleted = '[VORSTAND] Load Vorstand Completed',
  LoadVorstandFromApi = '[VORSTAND] Load Vorstand From Api',
  LoadVorstandSkipped = '[VORSTAND] Load Vorstand Skipped'
}

export class LoadVorstand implements Action {
  readonly type = VorstandActionTypes.LoadVorstand;
}

export class LoadVorstandCompleted implements Action {
  readonly type = VorstandActionTypes.LoadVorstandCompleted;
  constructor(public payload: Vorstand) {}
}

export class LoadVorstandFromApi implements Action {
  readonly type = VorstandActionTypes.LoadVorstandFromApi;
}

export class LoadVorstandSkipped implements Action {
  readonly type = VorstandActionTypes.LoadVorstandSkipped;
}

export type VorstandActions = LoadVorstand | LoadVorstandCompleted | LoadVorstandFromApi | LoadVorstandSkipped;
