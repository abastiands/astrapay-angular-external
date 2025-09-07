import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-view-modal',
  standalone: true,
  templateUrl: './view-modal.html',
})
export class ViewModalComponent {
  title = signal('');
  description = signal('');
  date = signal('');
}
