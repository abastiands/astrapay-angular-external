import { Component } from "@angular/core";
import { chunkArray } from "../../../../shared/utils/globalutil";
import {DashboardCardComponent} from '../../../../components/dashboardcard/dashboard-card';
import {dateNow} from '../../../../shared/utils/dateutil';

@Component({
    selector: 'app-weekly-panel',
    standalone: true,
    imports: [DashboardCardComponent],
    templateUrl: './weekly-panel.html',
    styleUrl: '../dashboard.css'
})
export class WeeklyPanelComponent{
    resultWeeklyNotes = [
      {
        title: '', description: '', date: '',
      },
      // {
      //   title: 'Weekly Panel 1', description: 'Weekly Panel 1', date: dateNow(),
      // },
      // {
      //   title: 'Weekly Panel 1', description: 'Weekly Panel 1', date: dateNow(),
      // },
      // {
      //   title: 'Weekly Panel 1', description: 'Weekly Panel 1', date: dateNow(),
      // },
      // {
      //   title: 'Weekly Panel 1', description: 'Weekly Panel 1', date: dateNow(),
      // },
      // {
      //   title: 'Weekly Panel 1', description: 'Weekly Panel 1', date: dateNow(),
      // },
    ]

    get weeklyNoteChunks() {
      return chunkArray(this.resultWeeklyNotes);
    }
}
