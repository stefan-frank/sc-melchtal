export class Helper {
  public static createDate(day: number, month: number, year: number) {
    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month + 1);
    date.setDate(day);
    return date;
  }
}
