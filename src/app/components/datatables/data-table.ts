import {Component, OnInit, signal} from '@angular/core';
import {DataTablesModule} from 'angular-datatables';
import {AddModalComponent} from '../addmodal/add-modal';
import {DeleteModalComponent} from '../deletemodal/delete-modal';
import {EditModalComponent} from '../editmodal/edit-modal';
import {ViewModalComponent} from '../viewmodal/view-modal';
import {Note} from '../../features/note/entity/note.entity';
import {NoteService} from '../../features/note/services/note.service';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [DataTablesModule, AddModalComponent, DeleteModalComponent, EditModalComponent, ViewModalComponent],
  templateUrl: 'data-table.html'
})
export class DataTableComponent implements OnInit {
  notes = signal<Note[]>([]);

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
}
