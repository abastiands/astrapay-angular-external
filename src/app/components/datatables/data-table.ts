import {Component, OnInit, signal} from '@angular/core';
import {DataTablesModule} from 'angular-datatables';
import {DeleteModalComponent} from '../deletemodal/delete-modal';
import {EditModalComponent} from '../editmodal/edit-modal';
import {ViewModalComponent} from '../viewmodal/view-modal';
import {Note} from '../../features/note/entity/note.entity';
import {NoteService} from '../../features/note/services/note.service';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [DataTablesModule, DeleteModalComponent, EditModalComponent, ViewModalComponent],
  templateUrl: 'data-table.html'
})
export class DataTableComponent implements OnInit {
  notes = signal<Note[]>([]);
  selectedNote = signal<Note | null>(null)
  selectedNoteId!: number;

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.noteService.getNotes().subscribe({
      next: res => {
        if (res.data) {
          this.notes.set(res.data);
        } else {
          console.warn('API response error:', res.responseException)
        }
      },
      error: err => console.error('API error:', err)
    })
  }

  viewNote(id: number) {
    this.noteService.getNoteById(id).subscribe({
      next: res => {
        this.selectedNote.set(res.data);
      },
      error: (error) => {
        console.error('Error fetching note:', error);
      }
    });
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id).subscribe({
      next: () => {
        console.log('Note deleted successfully');
      },
      error: (error) => {
        console.error('Error deleting note:', error);
      }
    });
  }
}
