import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageComponent } from './manage/manage.component';
import { UploadComponent } from './upload/upload.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule {}
