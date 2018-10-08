import {Ereignis} from './ereignis.model';

export class Programm {
  public ereignisse = new Array<Ereignis>();
  private today: Date;
  private yesterday: Date;

  constructor() {
    this.today = new Date();
    this.yesterday = new Date();
    this.yesterday.setDate(this.today.getDate() - 1);
  }

  public ereignisseInZukunft(): Ereignis[] {
    const ereignisseInZukunft = new Array<Ereignis>();

    this.ereignisse.forEach(ereignis => {
      if (ereignis.dateFrom > this.yesterday) {
        ereignisseInZukunft.push(ereignis);
      } else if (ereignis.dateTo > this.today) {
        ereignisseInZukunft.push(ereignis);
      }
    });

    return ereignisseInZukunft;
}
}
