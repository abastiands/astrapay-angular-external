import {Component, EventEmitter, Output, signal} from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  templateUrl: './edit-modal.html',
})
export class EditModalComponent {
  title = signal('');
  description = signal('');
  date = signal('');
}
