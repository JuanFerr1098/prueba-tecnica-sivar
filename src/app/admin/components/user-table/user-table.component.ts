import { Component } from '@angular/core';
import { PrimeMaterialModule } from '../../../shared/material/prime-material/prime-material.module';
import { CommonModule } from '@angular/common';

interface User {
  id?: string;
}

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [PrimeMaterialModule, CommonModule],
  templateUrl: './user-table.component.html',
  styles: ``,
})
export default class TableComponent {
  users: User[] = [
    {
      id: 'asdasd',
    },
  ];

  public openNew() {}
  editUser(user: User) {}
  deleteUser(user: User) {}
}
