import {Note} from '../../features/note/entity/note.entity';
import {
  dateNow, dateTwoDaysAgo, dateYesterday, monthStartDate,
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
  return notes.filter(item => item.date >= monthStartDate()).length;
}

export function totalLastMonthNotes(notes: Note[]): number {
  return notes.filter(item => item.date >= monthStartDateLastMonth()).length;
}

