import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { chunkArray } from "../../../../shared/utils/globalutil";
import {DashboardCardComponent} from '../../../../components/dashboardcard/dashboard-card';
import {dateNow} from '../../../../shared/utils/dateutil';

@Component({
    selector: 'app-current-panel',
    standalone: true,
    imports: [CommonModule, DashboardCardComponent],
    templateUrl: './current-panel.html'
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
        // dst...
      ];

      // replace state sementara dengan data asli
      this.resultCurrentNotes = dataFromServer.length ? dataFromServer : this.resultCurrentNotes;
    }

    ngOnInit() {
      this.loadData();
    }
}
