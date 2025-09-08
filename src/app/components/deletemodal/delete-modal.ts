import {Component, EventEmitter, input, Output} from '@angular/core';
import {NoteService} from '../../features/note/services/note.service';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  templateUrl: './delete-modal.html',
})
export class DeleteModalComponent {
  noteId = input<number>(); // Input dari parent
  @Output() deletedNoteId = new EventEmitter<void>();

  constructor(private noteService: NoteService) {}

  onSubmit() {
    const id = this.noteId();
    if (!id) return;

    this.noteService.deleteNote(id).subscribe({
      next: (res) => {
        console.log('Deleted:', res);
        this.deletedNoteId.emit();
      },
      error: (err) => {
        console.error('Delete gagal:', err);
      },
    });
  }
}
