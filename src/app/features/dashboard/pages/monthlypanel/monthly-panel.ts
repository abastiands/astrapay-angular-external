import { Component } from "@angular/core";
import { chunkArray } from "../../../../shared/utils/globalutil";
import {DashboardCardComponent} from '../../../../components/dashboardcard/dashboard-card';
import {dateNow} from '../../../../shared/utils/dateutil';

@Component({
    selector: 'app-monthly-panel',
    standalone: true,
  imports: [DashboardCardComponent],
    templateUrl: './monthly-panel.html'
})
export class MonthlyPanelComponent{
    resultMonthlyNotes = [
      {
        title: 'Monthly Panel 1', description: 'Monthly Panel 1', date: dateNow(),
      },
      {
        title: 'Monthly Panel 1', description: 'Monthly Panel 1', date: dateNow(),
      },
      {
        title: 'Monthly Panel 1', description: 'Monthly Panel 1', date: dateNow(),
      },
      {
        title: 'Monthly Panel 1', description: 'Monthly Panel 1', date: dateNow(),
      },
      {
        title: 'Monthly Panel 1', description: 'Monthly Panel 1', date: dateNow(),
      },
      {
        title: 'Monthly Panel 1', description: 'Monthly Panel 1', date: dateNow(),
      },
    ]

    get monthlyNoteChunks() {
      return chunkArray(this.resultMonthlyNotes);
    }
}
