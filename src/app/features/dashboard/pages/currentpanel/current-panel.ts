import {Component} from "@angular/core";
import { chunkArray } from "../../../../shared/utils/globalutil";
import {DashboardCardComponent} from '../../../../components/dashboardcard/dashboard-card';
import {dateNow} from '../../../../shared/utils/dateutil';

@Component({
    selector: 'app-current-panel',
    standalone: true,
  imports: [DashboardCardComponent],
    templateUrl: './current-panel.html',
    styleUrl: './current-panel.css',
})
export class CurrentPanelComponent{
    resultCurrentNotes = [
      { title: '', description: '', date: '' }
    ];

    get currentNoteChunks() {
        return chunkArray(this.resultCurrentNotes);
    }

    loadData() {
      const dataFromServer = [
        { title: 'Current Panel 1', description: 'Current Panel 1', date: dateNow() },
        { title: 'Current Panel 2', description: 'Current Panel 2', date: dateNow() },
      ];

      this.resultCurrentNotes = dataFromServer.length ? dataFromServer : this.resultCurrentNotes;
    }

    ngOnInit() {
      this.loadData();
    }
}
