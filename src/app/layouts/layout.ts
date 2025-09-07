import { Component } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar";
import { MainComponent } from "./main/main";
import { NavbarComponent } from "./navbar/navbar";

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [SidebarComponent, NavbarComponent, MainComponent],
    templateUrl: './layout.html'
})
export class LayoutComponent {}