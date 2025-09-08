import {Component, input} from '@angular/core';
import {getRandomBrightPastelColor} from '../../shared/utils/colorutil';
import {dateNow} from '../../shared/utils/dateutil';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  templateUrl: './dashboard-card.html',
  styleUrl: './dashboard-card.css'
})
export class DashboardCardComponent {
  title = input<string>('Title');
  description = input<string>('Description');
  date = input<string>(dateNow());

  bgColor = getRandomBrightPastelColor
}
