import {Asset} from './asset.model';

export class Vorstandsmitglied {
  public role: string;
  public nachname: string;
  public vorname: string;
  public email: string;
  public mobile: string;
  public telefon: string;
  public strasse: string;
  public zipcode: string;
  public location: string;
  public avatar: Asset;
}
