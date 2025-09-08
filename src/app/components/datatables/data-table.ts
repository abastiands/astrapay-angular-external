import { Component } from '@angular/core';
import {DataTablesModule} from 'angular-datatables';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [DataTablesModule],
  templateUrl: 'data-table.html'
})
export class DataTableComponent {}
