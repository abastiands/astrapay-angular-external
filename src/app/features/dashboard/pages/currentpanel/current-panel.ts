import {Component} from "@angular/core";
import { chunkArray } from "../../../../shared/utils/globalutil";
import {DashboardCardComponent} from '../../../../components/dashboardcard/dashboard-card';
import {dateNow} from '../../../../shared/utils/dateutil';

@Component({
    selector: 'app-current-panel',
    standalone: true,
    imports: [DashboardCardComponent],
    templateUrl: './current-panel.html',
    styleUrls: ['./current-panel.css', '../dashboard.css'],
})
export class CurrentPanelComponent{
    resultCurrentNotes = [
      { title: 'title', description: 'description', date: dateNow() },
      { title: 'title', description: 'description', date: dateNow() },
      { title: 'title', description: 'description', date: dateNow() },
      { title: 'title', description: 'description', date: dateNow() },
      { title: 'title', description: 'description', date: dateNow() },
      { title: 'title', description: 'description', date: dateNow() },
      { title: 'title', description: 'description', date: dateNow() },
      { title: 'title', description: 'description', date: dateNow() },
      { title: 'title', description: 'description', date: dateNow() }
    ];

    get currentNoteChunks() {
        return chunkArray(this.resultCurrentNotes);
    }
}
