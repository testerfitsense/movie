type Year = `${number}${number}${number}${number}`;
type Month = `${number}${number}`;
type Day = `${number}${number}`;
type Hours = `${number}${number}`;
type Minutes = `${number}${number}`;
type Seconds = `${number}${number}`;
type Milliseconds = `${number}${number}${number}`;
type DateISODate = `${Year}-${Month}-${Day}`;
type DateISOTime = `${Hours}:${Minutes}:${Seconds}.${Milliseconds}`;
type DateISO = `${DateISODate}T${DateISOTime}Z`;

export enum Category {
  Training = "training",
  Travel = "travel",
  Meal = "meal",
}

export type Expense = {
  id: number;
  merchant: string;
  amount: number;
  description: string;
  date: DateISO;
  category: Category;
  status: string;
};
