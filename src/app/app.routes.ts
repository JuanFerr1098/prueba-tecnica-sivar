import { Routes } from '@angular/router';
import { AppComponent } from './app.component';


export const routes: Routes = [
  {
    path: '',
    children:[
      {
        path:'admin/user',
        loadComponent: ()=> import('./admin/components/user-panel/user-panel.component')
      },
      {
        path:'admin/role',
        loadComponent: ()=> import('./admin/components/user-table/user-table.component')
      },
      {
        path:'admin/company',
        loadComponent: ()=> import('./admin/components/user-table/user-table.component')
      }
    ]
  },
];
