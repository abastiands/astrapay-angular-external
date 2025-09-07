import { Component } from "@angular/core";
import { TotalCardComponent } from "../../../../components/totalcard/total-card";

@Component({
    selector: 'app-total-panel',
    standalone: true,
    imports: [TotalCardComponent],
    templateUrl: './total-panel.html'
})
export class TotalPanelComponent {
    resultTotalPanel = [
        {
            title: 'Total Current Notes', value: 3, changeColor: 'success', compareValue: '+1'
        },
        {
            title: 'Total Yesterday Notes', value: 2, changeColor: 'danger', compareValue: '-2'
        },
        {
            title: 'Total Weekly Notes', value: 10, changeColor: 'secondary', compareValue: '+0'
        },
        {
            title: 'Total Monthly Notes', value: 40, changeColor: 'success', compareValue: '+20'
        },
    ]
}