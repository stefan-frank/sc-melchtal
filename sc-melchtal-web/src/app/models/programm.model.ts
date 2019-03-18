import {Ereignis} from './ereignis.model';

export class Programm {
  private _ereignisse = new Array<Ereignis>();
  private today: Date;
  private yesterday: Date;
  private _ereignisseInZukunft = new Array<Ereignis>();
  private _ereignisseInVergangenheit = new Array<Ereignis>();

  constructor() {
    this.today = new Date();
    this.yesterday = new Date();
    this.yesterday.setDate(this.today.getDate() - 1);
  }

  public set ereignisse(ereignisse: Array<Ereignis>) {
    ereignisse.forEach(ereignis => {
      if (ereignis.dateFrom > this.yesterday) {
        this._ereignisseInZukunft.push(ereignis);
      } else if (ereignis.dateTo > this.today) {
        this._ereignisseInZukunft.push(ereignis);
      } else {
        this._ereignisseInVergangenheit.push(ereignis);
      }
    });
  }

  public get ereignisseInZukunft(): Ereignis[] {
    return this._ereignisseInZukunft;
  }

  public get ereignisseInVergangenheit(): Ereignis[] {
    return this._ereignisseInVergangenheit;
  }

}
