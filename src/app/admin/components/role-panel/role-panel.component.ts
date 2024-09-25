import { Component } from '@angular/core';
import { ROLES } from '../../../data';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrimeMaterialModule } from '../../../shared/material/prime-material/prime-material.module';

interface UserRole {
  id?: string;
  roleName: string;
}

@Component({
  selector: 'app-role-panel',
  standalone: true,
  imports: [CommonModule, PrimeMaterialModule, FormsModule],
  templateUrl: './role-panel.component.html',
  styles: ``,
})
export default class RolePanelComponent {
    roleToCreate: UserRole = {
      roleName: '',
    }
    roleToEdit: UserRole = {
      roleName: '',
    }
    visible: boolean = false
    editVisible: boolean = false
    public roles: UserRole[] = ROLES
    constructor() {}
    showDialog() {
      this.visible = true;
    }
    showEditDialog(role: UserRole) {
        this.editVisible = true;
        this.roleToEdit = role;
    }
    createRole() {}
    updateRole() {}
}
