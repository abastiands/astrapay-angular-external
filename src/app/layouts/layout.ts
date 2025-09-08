import { Component } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar";
import { MainComponent } from "./main/main";
import { NavbarComponent } from "./navbar/navbar";
import { FooterComponent } from "./footer/footer";
import {AddModalComponent} from '../components/addmodal/add-modal';
import {DeleteModalComponent} from '../components/deletemodal/delete-modal';
import {EditModalComponent} from '../components/editmodal/edit-modal';
import {ViewModalComponent} from '../components/viewmodal/view-modal';

@Component({
    selector: 'app-layout',
    standalone: true,
  imports: [SidebarComponent, NavbarComponent, MainComponent, FooterComponent, AddModalComponent, DeleteModalComponent, EditModalComponent, ViewModalComponent],
    templateUrl: './layout.html'
})
export class LayoutComponent {}
