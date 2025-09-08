import {Component} from '@angular/core';
import { DataTableComponent } from '../../../components/datatables/data-table';
import { AddModalComponent } from '../../../components/addmodal/add-modal';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [
    DataTableComponent,
    AddModalComponent,
  ],
  templateUrl: './note.html',
  styleUrl: './note.css'
})
export class NoteComponent {}
