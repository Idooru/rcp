import {DateTime} from 'luxon';

export const makeRandomPastDate = (): Date => {
  const value = new Date().valueOf();
  const n = 10000;
  return new Date(value - Math.floor(Math.random() * n * n));
};

export const makeRelativeDate = (date: Date): string | null =>
  DateTime.fromJSDate(date).startOf('day').toRelative();

export const makeDayMonthYear = (date: Date) =>
  DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL);

export const randomDayMonthYear = () => makeDayMonthYear(makeRandomPastDate());
