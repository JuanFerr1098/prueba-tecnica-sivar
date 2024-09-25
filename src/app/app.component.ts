import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import TopBarComponent from './shared/components/top-bar/top-bar.component';
import SideBarComponent from "./shared/components/side-bar/side-bar.component";
import TableComponent from './admin/components/user-table/user-table.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, TopBarComponent, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prueba-tecnica-sivar';
}
