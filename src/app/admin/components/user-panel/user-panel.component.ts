import { Component } from '@angular/core';
import { USERS } from '../../../data';
import { CommonModule } from '@angular/common';
import { PrimeMaterialModule } from '../../../shared/material/prime-material/prime-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { Company, User } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [CommonModule, PrimeMaterialModule, FormsModule],
  templateUrl: './user-panel.component.html',
  styles: ``,
})
export default class UserPanelComponent {

  constructor(
    private service: ApiService
  ) {}
  NgOnInit(): void {
    this.service.GetUsers();
    this.service.getUsers().subscribe((users) => {
      this.users = users
    })
  }

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
  visibleCompanies: boolean = false;

  public users: User[] = USERS;
  public companies? : Company[] = []
  showDialog() {
    this.visible = true;
  }
  showEditDialog(user: User) {
    this.editVisible = true;
    this.userToEdit = user;
  }
  createUser() {
    console.log(this.userToCreate);
    this.service.CreateUser(this.userToCreate);
    
  }
  updateUser() {}
  FindCompanies(user: User) {
    this.visibleCompanies = true;
    this.companies = user.companies;
  }
}
