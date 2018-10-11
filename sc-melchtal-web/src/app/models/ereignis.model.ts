import {Vorstandsmitglied} from './Vorstandsmitglied.model';

export class Ereignis {
  dateFrom: Date;
  dateTo: Date;
  title: string;
  description: string;
  calendar: string;
  anmeldung: boolean;
  auskunft: boolean;
  contact: Vorstandsmitglied;
  contactByMail: boolean;
  contactByMobile: boolean;
  contactByTelefon: boolean;
}
