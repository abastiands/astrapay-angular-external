import {Component, EventEmitter, Output, signal} from '@angular/core';

@Component({
  selector: 'app-add-modal',
  standalone: true,
  templateUrl: './add-modal.html',
})
export class AddModalComponent {
  title = signal('');
  description = signal('');
  date = signal('');
}
