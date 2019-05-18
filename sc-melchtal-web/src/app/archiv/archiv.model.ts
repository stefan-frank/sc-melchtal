import {Asset} from '../models/asset.model';

export interface ArchivedDocuments {
  name: string;
  document: Asset;
  date: Date;
  type?: 'rangliste' | 'protokoll' | 'programm';
}
