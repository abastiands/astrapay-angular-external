import {Note} from '../../features/note/entity/note.entity';
import {dateNow, monthStartDate, weekStartDate} from './dateutil';

export function dataCurrentNotes(notes: Note[]): Note[] {
  return notes.filter(item => item.date.startsWith(dateNow()));
}

export function dataWeeklyNotes(notes: Note[]): Note[] {
  return notes.filter(item => item.date >= weekStartDate());
}

export function dataMonthlyNotes(notes: Note[]): Note[] {
  return notes.filter(item => item.date >= monthStartDate());
}
