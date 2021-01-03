import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/components/not-found/not-found.component';

import { PhotoFormComponent } from './photos/containers/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/containers/photo-list/photo-list.component';

const routes: Routes = [
  {
    path: 'user/:userName',
    component: PhotoListComponent,
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
