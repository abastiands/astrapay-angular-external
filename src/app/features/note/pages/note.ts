import {Component} from '@angular/core';
import { DataTableComponent } from '../../../components/datatables/data-table';
import { AddModalComponent } from '../../../components/addmodal/add-modal';
import { DeleteModalComponent } from '../../../components/deletemodal/delete-modal';
import { EditModalComponent } from '../../../components/editmodal/edit-modal';
import { ViewModalComponent } from '../../../components/viewmodal/view-modal';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [
    DataTableComponent,
    AddModalComponent,
    DeleteModalComponent,
    EditModalComponent,
    ViewModalComponent
  ],
  templateUrl: './note.html',
  styleUrl: './note.css'
})
export class NoteComponent {}
