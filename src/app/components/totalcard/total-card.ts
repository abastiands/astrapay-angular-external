import { Component, input } from "@angular/core";

@Component({
    selector: 'app-total-card',
    standalone: true,
    templateUrl: './total-card.html'
})
export class TotalCardComponent {
    title = input<string>();
    value = input<number>();
    changeColor = input<string>();
    compareValue = input<string>();
}
