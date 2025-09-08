import {Component} from '@angular/core';
import {NoteService} from '../../features/note/services/note.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-modal',
  standalone: true,
  templateUrl: './add-modal.html',
  imports: [
    ReactiveFormsModule
  ]
})
export class AddModalComponent {
  noteForm = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(15)] }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(50)] }),
    date: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  constructor(private noteService: NoteService) {}

  onSubmit() {
    if (this.noteForm.valid) {
      this.noteService.addNote(this.noteForm.getRawValue()).subscribe({
        next: (res) => {
          console.log('Note berhasil ditambahkan:', res);
          this.noteForm.reset();
        },
        error: (err) => {
          console.error('Gagal tambah note:', err.message);
        }
      });
    }
  }
}
