import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageComponent } from './manage/manage.component';
import { UploadComponent } from './upload/upload.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'File'
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
        path: 'upload',
        component: UploadComponent,
        data: {
          title: 'Upload'
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
export class FileRoutingModule {}
