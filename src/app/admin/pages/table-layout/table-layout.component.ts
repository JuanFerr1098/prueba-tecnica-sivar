import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PrimeMaterialModule } from '../../../shared/material/prime-material/prime-material.module';
import SideBarComponent from '../../../shared/components/side-bar/side-bar.component';


@Component({
  selector: 'app-table-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PrimeMaterialModule, SideBarComponent],
  templateUrl: './table-layout.component.html',
  styles: ``,
})
export default class TableLayoutComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Navegar',
        items: [
          {
            label: 'Tabla de usuarios',
            icon: 'pi pi-user',
            command: () => {
              this.router.navigate(['admin/table']);
            },
          },
          {
            label: 'Tabla de Empresas',
            icon: 'pi pi-building',
            command: () => {
              this.router.navigate(['admin/table']);
            },
          },
          { label: 'Tabla de roles', icon: 'pi pi-lock', routerLink: 'admin' },
        ],
      },
    ];
  }
}
