import {Component, computed, input} from "@angular/core";
import { TotalCardComponent } from "../../../../components/totalcard/total-card";

@Component({
    selector: 'app-total-panel',
    standalone: true,
    imports: [TotalCardComponent],
    templateUrl: './total-panel.html'
})
export class TotalPanelComponent {
    totalCurrentNote = input<number>();
    totalYesterdayNote = input<number>();
    totalWeeklyNote = input<number>();
    totalMonthlyNote = input<number>();
    compareCurrentNote = input<number>();
    compareYesterdayNote = input<number>();
    compareWeeklyNote = input<number>();
    compareMonthlyNote = input<number>();

    resultTotalPanel = computed(() => [
      {
        title: 'Total Current Notes',
        value: this.totalCurrentNote(),
        changeColor: this.colorValue(this.compareCurrentNote()),
        compareValue: this.compareValue(this.compareCurrentNote())
      },
      {
        title: 'Total Yesterday Notes',
        value: this.totalYesterdayNote(),
        changeColor: this.colorValue(this.compareYesterdayNote()),
        compareValue: this.compareValue(this.compareYesterdayNote())
      },
      {
        title: 'Total Weekly Notes',
        value: this.totalWeeklyNote(),
        changeColor: this.colorValue(this.compareWeeklyNote()),
        compareValue: this.compareValue(this.compareWeeklyNote())
      },
      {
        title: 'Total Monthly Notes',
        value: this.totalMonthlyNote(),
        changeColor: this.colorValue(this.compareMonthlyNote()),
        compareValue: this.compareValue(this.compareMonthlyNote())
      },
    ]);

    colorValue(value: number | undefined): string {
      if (value! > 0) return 'success';
      else if (value! < 0) return 'danger';
      else return 'secondary';
    }

  compareValue(value: number | undefined): string {
    if (value === undefined || value === 0 || value > 0) {
      return '+0';
    } else if (value > 0) {
      return '+' + value.toString();
    } else {
      return value.toString();
    }
  }
}
