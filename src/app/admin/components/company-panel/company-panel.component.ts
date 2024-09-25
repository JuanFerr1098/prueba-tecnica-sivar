import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeMaterialModule } from '../../../shared/material/prime-material/prime-material.module';
import { FormsModule } from '@angular/forms';
import { COMPANIES } from '../../../data';

interface Company {
  id?: string;
  companyName: string;
}

@Component({
  selector: 'app-company-panel',
  standalone: true,
  imports: [CommonModule, PrimeMaterialModule, FormsModule],
  templateUrl: './company-panel.component.html',
  styles: ``,
})
export default class CompanyPanelComponent {
    companyToCreate: Company = {
      companyName: '',
    }
    companyToEdit: Company = {
      companyName: '',
    }
    visibleCreate = false;
    editVisible = false;
    public companies: Company[] = COMPANIES;
    showDialog() {
        this.visibleCreate = true;
    }
    showEditDialog(company: Company) {
        this.editVisible = true;
        this.companyToEdit = company;
    }
    createCompany() {
        this.visibleCreate = false;
    }
    updateCompany() {
        this.editVisible = false;
    }
}
