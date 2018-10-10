import {Asset} from './asset.model';
import {Vorstandsmitglied} from "./Vorstandsmitglied.model";

export enum VorstandsRole {
  PRAESIDENT = 'Präsident',
  HUETTENWART = 'Hüttenwart'
}

export class Vorstand {

  public vorstandsMitglieder = new Array<Vorstandsmitglied>();

  public getVorstandByRole(role: VorstandsRole): Vorstandsmitglied {
    const mitglieder = this.vorstandsMitglieder.filter(mitglied => mitglied.role === role.toString());

    if (mitglieder.length === 1) {
      return mitglieder[0];
    } else {
      return null;
    }
  }

}
