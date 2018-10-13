import {Asset} from './asset.model';
import {Vorstandsmitglied} from './Vorstandsmitglied.model';

export class News {
  title: string;
  text: string;
  attachement: Asset;
  author: Vorstandsmitglied;
  created: Date;
  updated: Date;
}
