import {Note} from '../../features/note/entity/note.entity';
import {
  dateNow, dateTwoDaysAgo, dateYesterday, monthEndDate, monthEndDateLastMonth, monthStartDate,
  monthStartDateLastMonth, weekStartDate, weekStartDateLastWeek
} from './dateutil';

export function totalCurrentNotes(notes: Note[]): number {
  return notes.filter(item => item.date.startsWith(dateNow())).length;
}

export function totalYesterdayNotes(notes: Note[]): number {
  return notes.filter(item => item.date.startsWith(dateYesterday())).length;
}

export function totalTwoDaysAgoNotes(notes: Note[]): number {
  return notes.filter(item => item.date.startsWith(dateTwoDaysAgo())).length;
}

export function totalWeeklyNotes(notes: Note[]): number {
  return notes.filter(item => item.date >= weekStartDate()).length;
}

export function totalLastWeekNotes(notes: Note[]): number {
  return notes.filter(item => item.date >= weekStartDateLastWeek()).length;
}

export function totalMonthlyNotes(notes: Note[]): number {
  const start = monthStartDate();
  const end = monthEndDate();
  return notes.filter(item => item.date >= start && item.date <= end).length;
}

export function totalLastMonthNotes(notes: Note[]): number {
  const start = monthStartDateLastMonth();
  const end = monthEndDateLastMonth();
  return notes.filter(item => item.date >= start && item.date <= end).length;
}

