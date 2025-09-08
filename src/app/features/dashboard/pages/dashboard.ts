import {Component, computed, OnInit, signal} from "@angular/core";
import { TotalPanelComponent } from "./totalpanel/total-panel";
import { CurrentPanelComponent } from "./currentpanel/current-panel";
import { WeeklyPanelComponent } from "./weeklypanel/weekly-panel";
import { MonthlyPanelComponent } from "./monthlypanel/monthly-panel";
import {Note} from '../../note/entity/note.entity';
import {NoteService} from '../../note/services/note.service';
import {
  totalCurrentNotes, totalLastMonthNotes, totalLastWeekNotes,
  totalMonthlyNotes, totalTwoDaysAgoNotes,
  totalWeeklyNotes,
  totalYesterdayNotes
} from '../../../shared/utils/totalUtil';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.html',
    imports: [TotalPanelComponent, CurrentPanelComponent, WeeklyPanelComponent, MonthlyPanelComponent]
})
export class DashboardComponent implements OnInit {
  notes = signal<Note[]>([]);

  totalCurrentNote = computed(() => totalCurrentNotes(this.notes()));
  totalYesterdayNote = computed(() => totalYesterdayNotes(this.notes()));
  totalTwoDaysAgoNote = computed(() => totalTwoDaysAgoNotes(this.notes()));
  totalWeeklyNote = computed(() => totalWeeklyNotes(this.notes()));
  totalLastWeekNote = computed(() => totalLastWeekNotes(this.notes()));
  totalMonthlyNote = computed(() => totalMonthlyNotes(this.notes()));
  totalLastMonthNote = computed(() => totalLastMonthNotes(this.notes()));

  compareCurrentNote = computed(() => totalCurrentNotes(this.notes()) - totalYesterdayNotes(this.notes()));
  compareYesterdayNote = computed(() => totalYesterdayNotes(this.notes()) - totalTwoDaysAgoNotes(this.notes()));
  compareWeeklyNote = computed(() => totalWeeklyNotes(this.notes()) - totalLastWeekNotes(this.notes()));
  compareMonthlyNote = computed(() => totalMonthlyNotes(this.notes()) - totalLastMonthNotes(this.notes()));

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.noteService.getNotes().subscribe({
      next: res => {
        if (res.data) {
          this.notes.set(res.data);
        } else {
          console.warn('API response error:', res.responseException)
        }
      },
      error: err => console.error('API error:', err)
    })
  }
}
