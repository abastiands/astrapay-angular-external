import { Component } from "@angular/core";
import { TotalPanelComponent } from "./totalpanel/total-panel";
import { CurrentPanelComponent } from "./currentpanel/current-panel";
import { WeeklyPanelComponent } from "./weeklypanel/weekly-panel";
import { MonthlyPanelComponent } from "./monthlypanel/monthly-panel";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.html',
    imports: [TotalPanelComponent, CurrentPanelComponent, WeeklyPanelComponent, MonthlyPanelComponent]
})
export class DashboardComponent {}