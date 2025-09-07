import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { getRandomBrightPastelColor } from "../../../../shared/utils/colorutil";
import { chunkArray } from "../../../../shared/utils/globalutil";

@Component({
    selector: 'app-current-panel',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './current-panel.html'
})
export class CurrentPanelComponent{
    currentNotes = Array(8);
    
    bgColor = getRandomBrightPastelColor

    get currentNoteChunks() {
        return chunkArray(this.currentNotes);
    }
}