import { Component } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar";
import { MainComponent } from "./main/main";
import { NavbarComponent } from "./navbar/navbar";
import { FooterComponent } from "./footer/footer";

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [SidebarComponent, NavbarComponent, MainComponent, FooterComponent],
    templateUrl: './layout.html'
})
export class LayoutComponent {}