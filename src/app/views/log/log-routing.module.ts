import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Log'
    },
    children: [
      {
        path: '',
        redirectTo: 'manage'
      },
      {
        path: 'manage',
        component: ManageComponent,
        data: {
          title: 'Manage'
        }
      },
      {
        path: 'form',
        component: FormComponent,
        data: {
          title: 'Form'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule {}
