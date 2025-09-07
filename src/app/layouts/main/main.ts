import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './main.html',
    styleUrl: './main.css'
})
export class MainComponent {}