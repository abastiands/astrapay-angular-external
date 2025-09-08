import {Component, computed, HostListener, input} from "@angular/core";
import {chunkArray, getResponsiveChunkSize} from "../../../../shared/utils/globalutil";
import {DashboardCardComponent} from '../../../../components/dashboardcard/dashboard-card';
import {Note} from '../../../note/entity/note.entity';

@Component({
    selector: 'app-weekly-panel',
    standalone: true,
    imports: [DashboardCardComponent],
    templateUrl: './weekly-panel.html',
    styleUrl: '../dashboard.css'
})
export class WeeklyPanelComponent{
    resultWeeklyNotes = input<Note[]>();

    weeklyNoteChunks = computed(() => chunkArray(this.resultWeeklyNotes()!, this.chunkSize));

    chunkSize = getResponsiveChunkSize(window.innerWidth);

    constructor() {}

    @HostListener("window:resize", [])
    onResize() {
      this.chunkSize = getResponsiveChunkSize(window.innerWidth);
    }
}
