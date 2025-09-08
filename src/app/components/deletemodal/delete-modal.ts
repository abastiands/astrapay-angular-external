import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  templateUrl: './delete-modal.html',
})
export class DeleteModalComponent {
  @Input() noteId!: number;
  @Output() deleteConfirmed = new EventEmitter<number>();

  confirmDelete() {
    this.deleteConfirmed.emit(this.noteId);
  }
}
