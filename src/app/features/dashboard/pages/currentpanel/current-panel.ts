import {Component, computed, HostListener, input} from "@angular/core";
import {chunkArray, getResponsiveChunkSize} from "../../../../shared/utils/globalutil";
import {DashboardCardComponent} from '../../../../components/dashboardcard/dashboard-card';
import {Note} from '../../../note/entity/note.entity';

@Component({
    selector: 'app-current-panel',
    standalone: true,
    imports: [DashboardCardComponent],
    templateUrl: './current-panel.html',
    styleUrls: ['./current-panel.css', '../dashboard.css'],
})
export class CurrentPanelComponent{
    resultCurrentNotes = input<Note[]>();

    currentNoteChunks = computed(() => chunkArray(this.resultCurrentNotes()!, this.chunkSize));

    chunkSize = getResponsiveChunkSize(window.innerWidth);

    constructor() {}

    @HostListener("window:resize", [])
    onResize() {
      this.chunkSize = getResponsiveChunkSize(window.innerWidth);
    }

}
