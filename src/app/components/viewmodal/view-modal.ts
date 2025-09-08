import {Component, input, signal} from '@angular/core';

@Component({
  selector: 'app-view-modal',
  standalone: true,
  templateUrl: './view-modal.html',
})
export class ViewModalComponent {
  title = input<string>();
  description = input<string>();
  date = input<string>();
}
