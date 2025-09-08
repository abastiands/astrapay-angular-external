import {Component, computed, HostListener, input} from "@angular/core";
import {chunkArray, getResponsiveChunkSize} from "../../../../shared/utils/globalutil";
import {DashboardCardComponent} from '../../../../components/dashboardcard/dashboard-card';
import {Note} from '../../../note/entity/note.entity';

@Component({
    selector: 'app-monthly-panel',
    standalone: true,
    imports: [DashboardCardComponent],
    templateUrl: './monthly-panel.html',
    styleUrl: '../dashboard.css'
})
export class MonthlyPanelComponent{
    resultMonthlyNotes = input<Note[]>();

    monthlyNoteChunks = computed(() => chunkArray(this.resultMonthlyNotes()!, this.chunkSize));

    chunkSize = getResponsiveChunkSize(window.innerWidth);

    constructor() {}

    @HostListener("window:resize", [])
    onResize() {
      this.chunkSize = getResponsiveChunkSize(window.innerWidth);
    }
}
