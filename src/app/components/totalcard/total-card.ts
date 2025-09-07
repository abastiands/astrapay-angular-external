import { Component, input } from "@angular/core";

@Component({
    selector: 'app-total-card',
    standalone: true,
    templateUrl: './total-card.html'
})
export class TotalCardComponent {
    title = input<string>('Total');
    value = input<number>(0);
    changeColor = input<string>('secondary');
    compareValue = input<string>('+0');
}
