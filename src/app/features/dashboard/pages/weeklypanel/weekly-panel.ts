import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { getRandomBrightPastelColor } from "../../../../shared/utils/colorutil";
import { chunkArray } from "../../../../shared/utils/globalutil";

@Component({
    selector: 'app-weekly-panel',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './weekly-panel.html'
})
export class WeeklyPanelComponent{
    weeklyNotes = Array(12);
    
    bgColor = getRandomBrightPastelColor

    get weeklyNoteChunks() {
        return chunkArray(this.weeklyNotes);
    }
}