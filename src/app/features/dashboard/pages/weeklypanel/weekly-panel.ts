import {Component, HostListener} from "@angular/core";
import {chunkArray, getResponsiveChunkSize} from "../../../../shared/utils/globalutil";
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

    get weeklyNoteChunks() {
      return chunkArray(this.resultWeeklyNotes, this.chunkSize);
    }
}
