import {Component, HostListener} from "@angular/core";
import {chunkArray, getResponsiveChunkSize} from "../../../../shared/utils/globalutil";
import {DashboardCardComponent} from '../../../../components/dashboardcard/dashboard-card';
import {dateNow} from '../../../../shared/utils/dateutil';

@Component({
    selector: 'app-monthly-panel',
    standalone: true,
    imports: [DashboardCardComponent],
    templateUrl: './monthly-panel.html',
    styleUrl: '../dashboard.css'
})
export class MonthlyPanelComponent{
    resultMonthlyNotes = [
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

    get monthlyNoteChunks() {
      return chunkArray(this.resultMonthlyNotes, this.chunkSize);
    }
}
