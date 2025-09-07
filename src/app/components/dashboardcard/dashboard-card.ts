import {Component, input} from '@angular/core';
import {getRandomBrightPastelColor} from '../../shared/utils/colorutil';
import {dateNow} from '../../shared/utils/dateutil';
import {AddModalComponent} from '../addmodal/add-modal';
import {DeleteModalComponent} from '../deletemodal/delete-modal';
import {EditModalComponent} from '../editmodal/edit-modal';
import {ViewModalComponent} from '../viewmodal/view-modal';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  templateUrl: './dashboard-card.html',
  styleUrl: './dashboard-card.css',
  imports: [
    AddModalComponent,
    DeleteModalComponent,
    EditModalComponent,
    ViewModalComponent
  ]
})
export class DashboardCardComponent {
  title = input<string>('Title');
  description = input<string>('Description');
  date = input<string>(dateNow());

  bgColor = getRandomBrightPastelColor
}
