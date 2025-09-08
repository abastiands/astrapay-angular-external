import { Component } from '@angular/core';
import { LayoutComponent } from './layouts/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
