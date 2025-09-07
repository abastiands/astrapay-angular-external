import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { getRandomBrightPastelColor } from "../../../../shared/utils/colorutil";
import { chunkArray } from "../../../../shared/utils/globalutil";

@Component({
    selector: 'app-monthly-panel',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './monthly-panel.html'
})
export class MonthlyPanelComponent{
    monthlyNotes = Array(24);
    
    bgColor = getRandomBrightPastelColor

    get monthlyNoteChunks() {
        return chunkArray(this.monthlyNotes);
    }
}