import { Component } from '@angular/core';
import { USERS } from '../../../data';
import { CommonModule } from '@angular/common';
import { PrimeMaterialModule } from '../../../shared/material/prime-material/prime-material.module';
import { FormsModule } from '@angular/forms';

interface User {
  id?: string;
  name: string;
  lastName: string;
  role?: UserRole;
  companies?: UserCompany[];
}
interface UserRole {
  id?: string;
  roleName: string;
}
interface UserCompany {
  id?: string;
  companyName: string;
}

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [CommonModule, PrimeMaterialModule, FormsModule],
  templateUrl: './user-panel.component.html',
  styles: ``,
})
export default class UserPanelComponent {
  userToCreate: User = {
    name: '',
    lastName: '',
  };
  userToEdit: User = {
    name: '',
    lastName: '',
  };
  visible: boolean = false;
  editVisible: boolean = false;

  public users: User[] = USERS;
  showDialog() {
    this.visible = true;
  }
  showEditDialog(user: User) {
    this.editVisible = true;
    this.userToEdit = user;
  }
  createUser() {
    console.log(this.userToCreate);
  }
  updateUser(){

  }
}
