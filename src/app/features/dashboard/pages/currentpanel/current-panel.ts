import {Component, HostListener} from "@angular/core";
import {chunkArray, getResponsiveChunkSize} from "../../../../shared/utils/globalutil";
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
      { title: 'titletitletitle', description: 'descriptiondescriptiondescriptiondescriptiondescription', date: dateNow() },
      { title: 'titletitletitle', description: 'descriptiondescriptiondescriptiondescriptiondescription', date: dateNow() },
      { title: 'titletitletitle', description: 'descriptiondescriptiondescriptiondescriptiondescription', date: dateNow() },
      { title: 'titletitletitle', description: 'descriptiondescriptiondescriptiondescriptiondescription', date: dateNow() },
      { title: 'titletitletitle', description: 'descriptiondescriptiondescriptiondescriptiondescription', date: dateNow() },
      { title: 'titletitletitle', description: 'descriptiondescriptiondescriptiondescriptiondescription', date: dateNow() },
      // { title: 'titletitletitle', description: 'descriptiondescriptiondescriptiondescriptiondescription', date: dateNow() },
      // { title: 'titletitletitle', description: 'descriptiondescriptiondescriptiondescriptiondescription', date: dateNow() },
      // { title: 'titletitletitle', description: 'descriptiondescriptiondescriptiondescriptiondescription', date: dateNow() }
    ];

    chunkSize = getResponsiveChunkSize(window.innerWidth);

    constructor() {}

    @HostListener("window:resize", [])
    onResize() {
      this.chunkSize = getResponsiveChunkSize(window.innerWidth);
    }

    get currentNoteChunks() {
        return chunkArray(this.resultCurrentNotes, this.chunkSize);
    }
}
